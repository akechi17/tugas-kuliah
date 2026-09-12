import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import {
  About,
  ClipPath,
  Contact,
  Footer,
  Header,
  Loading,
  RedAbout,
  RedClient,
  RedContact,
  RedHero,
  RedWork,
  SlideNav,
  Work,
} from "../components";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  const { x, y } = useMousePosition();
  const size = isHovered ? 308.854167 : isHidden ? 0 : 27.453704;
  const mobileSize = isPressed ? 500 : 0;
  const [currentSound, setCurrentSound] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setScreenSize(window.innerWidth);
    };

    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    window.addEventListener("resize", handleResize);
    detectTouch();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Loading
        setCurrentSound={setCurrentSound}
        isEnter={isEnter}
        setIsEnter={setIsEnter}
      />
      <Header setIsHidden={setIsHidden} />
      <main id='main-content' className='main-layer js-pageContent' role='main'>
        <div className='layer layer__dark'>
          <div className='container'>
            <About setIsHovered={setIsHovered} setIsHidden={setIsHidden} />
            <Work setIsHovered={setIsHovered} setIsHidden={setIsHidden} />
            <Contact setIsHovered={setIsHovered} setIsHidden={setIsHidden} />
          </div>
          <div className='frame-mobile'></div>
          <ClipPath />
        </div>
        <motion.div
          className={`layer layer__red js-masker${isRed ? " is-red-full" : ""}`}
          animate={{
            maskPosition: isRed
              ? `${window.innerWidth / 2 - 4000}px ${(document.querySelector(".layer__red")?.getBoundingClientRect().height || document.body.scrollHeight) / 2 - 4000}px`
              : isMobile || isTouchDevice
                ? `${(screenSize / 2) - 30}px 700px`
                : `${x - size / 2}px ${y - size / 2}px`,
            maskSize: isRed ? "8000px" : isMobile || isTouchDevice ? "0px" : `${size}px`,
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: isHidden ? 0.2 : 0.4,
          }}
        >
          <div className='container'>
            <RedHero />
            <RedAbout />
            <RedWork />
            <RedClient />
            <RedContact />
          </div>
        </motion.div>
      </main>
      <button
        type='button'
        className={`red-toggle-btn${isRed ? " is-active" : ""}`}
        onClick={() => setIsRed((v) => !v)}
        aria-pressed={isRed}
        title='Toggle layout merah'
      >
        <span className='red-toggle-btn_dot'></span>
        <span className='red-toggle-btn_label'>
          {isRed ? "DARK" : "RED"}
        </span>
      </button>
      <Footer setIsHidden={setIsHidden} currentSound={currentSound} />
      <SlideNav visible={isEnter} />
      <div id='layout-resize' style={{ zIndex: "-1", opacity: 0 }}></div>
    </>
  );
};

export default Home;
