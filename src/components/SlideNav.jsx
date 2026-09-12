import React, { useCallback, useEffect, useRef, useState } from "react";

// Urutan "slide" mengikuti alur materi Komputer dan Masyarakat.
// Selektor di-scope ke layer gelap karena layer merah memakai class yang sama.
const SLIDES = [
  { selector: ".hero", name: "Judul" },
  { selector: ".about_me", name: "Pengantar" },
  { selector: ".about_ido", name: "Peran Komputer" },
  { selector: ".work_experience", name: "Perkembangan" },
  { selector: ".work_history", name: "Sejarah" },
  { selector: ".client", name: "Dampak Positif" },
  { selector: ".contact", name: "Kontak" },
];

const SlideNav = ({ visible }) => {
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef([]);

  const getSlides = useCallback(() => {
    const darkLayer = document.querySelector(".layer__dark");
    if (!darkLayer) return [];
    return SLIDES.map(({ selector }) =>
      darkLayer.querySelector(selector)
    ).filter(Boolean);
  }, []);

  // Tentukan slide aktif berdasarkan posisi scroll
  useEffect(() => {
    slidesRef.current = getSlides();

    const updateCurrent = () => {
      const slides = slidesRef.current;
      if (!slides.length) return;
      const probe = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      slides.forEach((el, i) => {
        if (el.getBoundingClientRect().top + window.scrollY <= probe) idx = i;
      });
      setCurrent(idx);
    };

    updateCurrent();

    // Lenis memakai transform/scroll native — dengarkan keduanya
    window.addEventListener("scroll", updateCurrent, { passive: true });
    const lenis = window.__lenis;
    lenis?.on("scroll", updateCurrent);

    return () => {
      window.removeEventListener("scroll", updateCurrent);
      lenis?.off("scroll", updateCurrent);
    };
  }, [getSlides]);

  const goTo = useCallback((index) => {
    const slides = slidesRef.current;
    if (!slides.length) return;
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const target = slides[clamped];
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setCurrent(clamped);
  }, []);

  // Navigasi keyboard ala presentasi: panah kiri/kanan & PageUp/PageDown
  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goTo(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, visible]);

  if (!visible) return null;

  const total = slidesRef.current.length || SLIDES.length;
  const btnStyle = {
    background: "transparent",
    border: "none",
    color: "#B7AB98",
    fontSize: "22px",
    lineHeight: 1,
    padding: "8px 14px",
    cursor: "pointer",
  };

  return (
    <nav
      className='slide-nav'
      aria-label='Navigasi slide'
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        zIndex: 60,
        backgroundColor: "rgba(13, 13, 13, 0.65)",
        border: "1px solid rgba(183, 171, 152, 0.4)",
        borderRadius: "999px",
        padding: "2px 8px",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        userSelect: "none",
      }}
    >
      <button
        style={{ ...btnStyle, opacity: current === 0 ? 0.3 : 1 }}
        disabled={current === 0}
        onClick={() => goTo(current - 1)}
        aria-label='Slide sebelumnya'
      >
        ‹
      </button>
      <span
        className='body-text'
        style={{
          color: "#B7AB98",
          fontSize: "13px",
          letterSpacing: "0.08em",
          minWidth: "110px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {current + 1} / {total} · {SLIDES[current]?.name ?? ""}
      </span>
      <button
        style={{ ...btnStyle, opacity: current === total - 1 ? 0.3 : 1 }}
        disabled={current === total - 1}
        onClick={() => goTo(current + 1)}
        aria-label='Slide berikutnya'
      >
        ›
      </button>
    </nav>
  );
};

export default SlideNav;
