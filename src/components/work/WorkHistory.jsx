import React, { useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function WorkHistory({ data, setIsHidden }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className='work_history'>
      <div className='row work_heading work_history_heading'>
        <div className='col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12'>
          <p className='work_content_label container_content body-text text-uppercase mb-0'>
            Perubahan dari Masa ke Masa
          </p>
        </div>
      </div>
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
    </section>
  );
}

function Title({ data, setSelectedProject, selectedProject, setIsHidden }) {
  const { description, title, client, joke, i } = data;

  return (
    <div
      className={`heading-mask ${title === "now" ? "heading-mask__now" : ""} ${
        selectedProject == i ? "is-hover" : ""
      }`}
    >
      <div className='heading-mask_el container_content heading-mask_el__deep'>
        <div className='row'>
          <div className='col-sm-2 offset-lg-2 offset-sm-1 col-3'>
            <div className='simple-masking'>
              <div className='simple-masking_el'>
                <span className='h3 mb-1'>{title}</span>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-8 col-9'>
            <div
              className='simple-masking_el js-simple-masking_el js-cursor-contract'
              onMouseOver={() => {
                setSelectedProject(i);
                setIsHidden(true);
              }}
              onMouseLeave={() => {
                setSelectedProject(null);
                setIsHidden(false);
              }}
            >
              <p className='h3 mb-1'>{description}</p>
              <p className='mb-0 desc font-400'>{client}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='heading-mask_el container_content heading-mask_el__masking'>
        <div className='row'>
          <div className='col-sm-2 offset-lg-2 offset-sm-1 col-3'>
            <div className='simple-masking'>
              <div className='simple-masking_el'>
                <span className='h3 mb-1 text-dark'>{title}</span>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-sm-8 col-9'>
            <div className='simple-masking_el'>
              <h4 className='h3 mb-1 text-dark'>{joke}</h4>
              <p className='mb-0 desc font-400 text-dark'>{client}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
