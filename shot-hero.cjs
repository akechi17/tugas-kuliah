const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    headless: "new",
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:5173", { waitUntil: "networkidle2", timeout: 60000 });
  await page.waitForSelector(".skip-intro-btn", { timeout: 30000 });
  await page.click(".skip-intro-btn");
  await new Promise((r) => setTimeout(r, 3000));
  const el = await page.$(".layer__dark .hero");
  await el.screenshot({ path: "hero-cropped.png" });
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
