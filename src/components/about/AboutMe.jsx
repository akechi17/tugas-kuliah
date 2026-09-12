import React, { useRef, useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const AboutMe = ({ setIsHovered }) => {
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
        useTransform(scrollYProgress, [0.875, 1.0], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.75, 0.875], ["0%", "100%"]),
        useTransform(scrollYProgress, [0.625, 0.75], ["0%", "100%"]),
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
    <div className='row about_me'>
      <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
        <div
          className='about_content container_content js-cursor-extend'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className='about_content_label body-text text-uppercase'>
            Pengantar
          </p>
          <div
            ref={container}
            className='about_content_desc h2 scroll-paragraph-parent'
          >
            <div className='scroll-paragraph-mask js-scroll-paragraph-mask is-masking'>
              {isMobile ? (
                <>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[0] }}
                  >
                    Komputer dan
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[1] }}
                  >
                    masyarakat saling
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[2] }}
                  >
                    terkait: <strong>teknologi</strong>
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[3] }}
                  >
                    <strong>mengubah</strong> cara kita
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[4] }}
                  >
                    bekerja, belajar, dan
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[5] }}
                  >
                    berkomunikasi
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[6] }}
                  >
                    dalam kehidupan
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[7] }}
                  >
                    sehari-hari.
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[0] }}
                  >
                    Komputer dan masyarakat saling
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[1] }}
                  >
                    terkait: <strong>teknologi mengubah</strong> cara
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[2] }}
                  >
                    kita bekerja, belajar, dan
                  </motion.div>
                  <motion.div
                    className='line'
                    style={{ "--size": sizeValues[3] }}
                  >
                    berkomunikasi setiap hari.
                  </motion.div>
                </>
              )}
            </div>

            <div className='scroll-paragraph-mask js-scroll-paragraph-mask is-bg'>
              {isMobile ? (
                <>
                  <div className='line' style={{ "--size": "100%" }}>
                    Komputer dan
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    masyarakat saling
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    terkait: <strong>teknologi</strong>
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    <strong>mengubah</strong> cara kita
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    bekerja, belajar, dan
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    berkomunikasi
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    dalam kehidupan
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    sehari-hari.
                  </div>
                </>
              ) : (
                <>
                  <div className='line' style={{ "--size": "100%" }}>
                    Komputer dan masyarakat saling
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    terkait: <strong>teknologi mengubah</strong> cara
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    kita bekerja, belajar, dan
                  </div>
                  <div className='line' style={{ "--size": "100%" }}>
                    berkomunikasi setiap hari.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
