import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const updateScroll = () => {
      setScrollOffset({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return {
    x: mousePosition.x + scrollOffset.x,
    y: mousePosition.y + scrollOffset.y,
  };
};

export default useMousePosition;
