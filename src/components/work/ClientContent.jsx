import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const ClientContent = () => {
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
        useTransform(scrollYProgress, [0.75, 1.0], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.625, 0.75], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.5, 0.625], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.375, 0.5], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.25, 0.375], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.125, 0.25], ["0%", "100%"]),
        useTransform(scrollYProgress, [0, 0.125], ["0%", "100%"]),
      ]
    : [
        useTransform(scrollYProgress, [0.66, 1.0], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.33, 0.66], ["0%", "100%"]),
        useTransform(scrollYProgress, [0, 0.33], ["0%", "100%"]),
      ];

  return (
    <div
      ref={container}
      className='client_content_desc h2 scroll-paragraph-parent'
    >
      <div className='scroll-paragraph-mask js-scroll-paragraph-mask is-masking'>
        {isMobile ? (
          <>
            <motion.div className='line' style={{ "--size": sizeValues[0] }}>
              Komputer memberikan
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[1] }}>
              berbagai manfaat
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[2] }}>
              bagi{" "}
              <strong style={{ display: "inline-block", position: "relative" }}>
                kehidupan
              </strong>
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[3] }}>
              masyarakat di
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[4] }}>
              berbagai bidang
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[5] }}>
              kehidupan
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[6] }}>
              sehari-hari.
            </motion.div>
          </>
        ) : (
          <>
            <motion.div className='line' style={{ "--size": sizeValues[0] }}>
              Komputer memberikan berbagai manfaat
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[1] }}>
              bagi{" "}
              <strong style={{ display: "inline-block", position: "relative" }}>
                kehidupan masyarakat
              </strong>{" "}
              di berbagai
            </motion.div>
            <motion.div className='line' style={{ "--size": sizeValues[2] }}>
              bidang kehidupan sehari-hari.
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
              Komputer memberikan
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              berbagai manfaat
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              bagi{" "}
              <strong style={{ display: "inline-block", position: "relative" }}>
                kehidupan
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
              masyarakat di
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              berbagai bidang
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              kehidupan
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              sehari-hari.
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
              Komputer memberikan berbagai manfaat
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              bagi{" "}
              <strong style={{ display: "inline-block", position: "relative" }}>
                kehidupan masyarakat
              </strong>{" "}
              di berbagai
            </div>
            <div
              className='line'
              style={{
                display: "block",
                textAlign: "start",
                width: "100%",
              }}
            >
              bidang kehidupan sehari-hari.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClientContent;
