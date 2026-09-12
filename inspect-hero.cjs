const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: "new",
    args: ["--no-sandbox", "--window-size=1440,900"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:5173", { waitUntil: "networkidle2", timeout: 60000 });

  // Skip the loading/intro screen
  await page.waitForSelector(".skip-intro-btn", { timeout: 30000 });
  await page.click(".skip-intro-btn");
  await new Promise((r) => setTimeout(r, 3000));

  // Measure clipping: for each hero h1 .line in BOTH layers
  const report = await page.evaluate(() => {
    const out = { dark: [], red: [], boxes: {} };
    const layers = [
      ["dark", document.querySelector(".layer__dark .hero h1")],
      ["red", document.querySelector(".layer__red .hero h1")],
    ];
    for (const [name, h1] of layers) {
      if (!h1) {
        out[name] = "NOT FOUND";
        continue;
      }
      h1.querySelectorAll(".line").forEach((line, i) => {
        const text = line.textContent.trim();
        const chars = [...line.querySelectorAll(".char, strong .char, div.char")];
        let minLeft = Infinity, maxRight = -Infinity;
        chars.forEach((c) => {
          const r = c.getBoundingClientRect();
          minLeft = Math.min(minLeft, r.left);
          maxRight = Math.max(maxRight, r.right);
        });
        const lr = line.getBoundingClientRect();
        out[name].push({
          text,
          lineWidth: Math.round(lr.width),
          textWidth: Math.round(maxRight - minLeft),
          overflowLeft: Math.round(minLeft - lr.left),
          overflowRight: Math.round(lr.right - maxRight),
        });
      });
    }
    // Vertical alignment of the two hero contents
    const d = document.querySelector(".layer__dark .hero_content_inner");
    const rEl = document.querySelector(".layer__red .hero_content_inner");
    if (d && rEl) {
      const a = d.getBoundingClientRect();
      const b = rEl.getBoundingClientRect();
      out.boxes = {
        darkTop: Math.round(a.top),
        redTop: Math.round(b.top),
        yDelta: Math.round(b.top - a.top),
        darkSubtitleBottom: Math.round(
          d.querySelector(".hero_content_inner_subtitle, h6")?.getBoundingClientRect()
            .bottom ?? -1
        ),
        redSubtitleBottom: Math.round(
          rEl.querySelector(".hero_content_inner_subtitle, .h6, h6")?.getBoundingClientRect()
            .bottom ?? -1
        ),
      };
    }
    return out;
  });
  console.log(JSON.stringify(report, null, 2));

  await page.screenshot({ path: "hero-desktop.png" });
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
