import React, { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function AboutTitles({ data, setIsHidden }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            setIsHidden={setIsHidden}
          />
        );
      })}
    </>
  );
}

function Title({ data, setSelectedProject, selectedProject, setIsHidden }) {
  const { description, title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className={`heading-mask js-heading-mask ${
        selectedProject == i ? "is-hover" : ""
      }`}
      onMouseEnter={() => {
        setIsHidden(true);
      }}
      onMouseLeave={() => {
        setIsHidden(false);
      }}
    >
      <div className='heading-mask_el heading-mask_el__deep container_content'>
        <div className='row align-items-center'>
          <div className='col-sm-6 offset-lg-2 offset-sm-1 col-12'>
            <div className='simple-masking'>
              <div
                className='js-simple-masking_el simple-masking_el js-cursor-contract'
                onMouseOver={() => {
                  setSelectedProject(i);
                }}
                onMouseLeave={() => {
                  setSelectedProject(null);
                }}
              >
                <motion.h2
                  className='h1 mb-0 js-heading-mask_heading is-masking'
                  style={{ clipPath: clip }}
                >
                  {title}
                </motion.h2>
                <h2 className='h1 mb-0 js-heading-mask_heading is-deep'>
                  {title}
                </h2>
              </div>
            </div>
          </div>
          <div className='col-3 text-dark d-lg-block d-none'>
            <p className='mb-0 desc'>{description}</p>
          </div>
        </div>
      </div>

      <div className='heading-mask_el heading-mask_el__masking container_content'>
        <div className='row align-items-center'>
          <div className='col-sm-6 offset-lg-2 offset-sm-1 col-12'>
            <div className='simple-masking overflow-hidden'>
              <div className='simple-masking_el'>
                <h2 className='h1 mb-0 text-dark'>{title}</h2>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-4 col-12 text-dark d-sm-block d-none'>
            <p className='mb-0 desc'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
