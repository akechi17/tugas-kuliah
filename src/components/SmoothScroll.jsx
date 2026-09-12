import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    // Ekspos instance agar komponen lain (SlideNav) bisa smooth-scroll
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      delete window.__lenis;
    };
  }, []);

  return children;
}
