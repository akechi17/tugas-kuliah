import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const WorkContent = ({ setIsHovered }) => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Define separate animations based on screen size
  const sizeValues = isMobile
    ? [
        useTransform(scrollYProgress, [0.9, 1.0], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.8, 0.9], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.7, 0.8], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.625, 0.7], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.5, 0.625], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.375, 0.5], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.25, 0.375], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.125, 0.25], ["0%", "100%"]),
        useTransform(scrollYProgress, [0, 0.125], ["0%", "100%"]),
      ]
    : [
        useTransform(scrollYProgress, [0.75, 1.0], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.5, 0.75], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.25, 0.5], ["0%", "100%"]),
        useTransform(scrollYProgress, [0, 0.25], ["0%", "100%"]),
      ];

  return (
    <div className='col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12'>
      <div
        className='work_content container_content js-cursor-extend'
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <p className='work_content_label body-text text-uppercase'>
          Perkembangan
        </p>
        <div
          ref={container}
          className='work_content_desc h2 scroll-paragraph-parent'
        >
          <div className='scroll-paragraph-mask js-scroll-paragraph-mask is-masking'>
            {isMobile ? (
              <>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[0] }}
                >
                  <strong
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    Perkembangan
                  </strong>
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[1] }}
                >
                  komputer berlangsung
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[2] }}
                >
                  sangat cepat: dari
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[3] }}
                >
                  mesin raksasa hingga
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[4] }}
                >
                  perangkat kecil di
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[5] }}
                >
                  tangan, internet,
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[6] }}
                >
                  dan kecerdasan
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[7] }}
                >
                  buatan di era
                </motion.div>
                <motion.div
                  className='line'
                  style={{ "--size": sizeValues[8] }}
                >
                  digital kini.
                </motion.div>
              </>
            ) : (
              <>
                <motion.div className='line' style={{ "--size": sizeValues[0] }}>
                  Perkembangan komputer berlangsung{" "}
                  <strong
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    sangat cepat
                  </strong>
                </motion.div>
                <motion.div className='line' style={{ "--size": sizeValues[1] }}>
                  dari mesin raksasa hingga perangkat
                </motion.div>
                <motion.div className='line' style={{ "--size": sizeValues[2] }}>
                  kecil, internet, dan kecerdasan
                </motion.div>
                <motion.div className='line' style={{ "--size": sizeValues[3] }}>
                  buatan di era digital kini.
                </motion.div>
              </>
            )}
          </div>
          <div className='scroll-paragraph-mask js-scroll-paragraph-mask is-bg'>
            {isMobile ? (
              <>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  <strong
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    Perkembangan
                  </strong>
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  komputer berlangsung
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  sangat cepat: dari
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  mesin raksasa hingga
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  perangkat kecil di
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  tangan, internet,
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  dan kecerdasan
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  buatan di era
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  digital kini.
                </div>
              </>
            ) : (
              <>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  Perkembangan komputer berlangsung{" "}
                  <strong
                    style={{ display: "inline-block", position: "relative" }}
                  >
                    sangat cepat
                  </strong>
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  dari mesin raksasa hingga perangkat
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  kecil, internet, dan kecerdasan
                </div>
                <div
                  className='line'
                  style={{
                    display: "block",
                    textAlign: "start",
                    width: "100%",
                  }}
                >
                  buatan di era digital kini.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
