import React from "react";
import Client from "./Client";
import WorkContent from "./WorkContent";
import WorkHistory from "./WorkHistory";
import LazyImage from "../LazyImage";

const data = [
  {
    title: "AI",
    description: "Era Kecerdasan Buatan",
    joke: "Mesin ikut berpikir",
    client: "Analisis data, mengenali pola, dan memahami bahasa",
  },
  {
    title: "Digital",
    description: "Era Digital",
    joke: "Semua serba online",
    client: "Transaksi online, belajar daring, dan layanan publik",
  },
  {
    title: "Internet",
    description: "Era Internet",
    joke: "Dunia dalam genggaman",
    client: "Komputer saling terhubung, informasi menyebar cepat",
  },
  {
    title: "PC",
    description: "Komputer Personal",
    joke: "Komputer masuk rumah",
    client: "Digunakan luas untuk kerja, pendidikan, dan pribadi",
  },
  {
    title: "Awal",
    description: "Komputer Generasi Awal",
    joke: "Sebesar ruangan",
    client: "Perhitungan dan penelitian dengan ukuran sangat besar",
  },
];

const Work = ({ setIsHovered, setIsHidden }) => {
  return (
    <div id='work'>
      <div className='work' id='work'>
        <div className='row work_experience'>
          <div
            className='work_bg'
            data-lenis-speed='.5'
          >
            <picture className='image__object-fit d-lg-block d-none js-image--lazy__wrapper js-lazy__webgl-image__wrapper'>
              <LazyImage
                src='images/orv2.jpg'
                className='js-image--lazy is-handle'
                srcSet='images/work-400.jpg 400w, images/work-800.jpg 800w, images/work-1200.jpg 1200w, images/work-1600.jpg 1600w, images/work-2400.jpg 2400w, images/work.jpg 3456w'
                width='1728'
                height='1008'
                sizes='(max-width: 1728px) 100vw, 1728px'
                alt='work'
              />
            </picture>
            <picture className='image__object-fit d-lg-none d-block js-image--lazy__wrapper js-lazy__webgl-image__wrapper'>
              <LazyImage
                src='images/orv2.jpg'
                className='js-image--lazy is-handle'
                srcSet='images/work-mobile-400.jpg 400w, images/work-mobile-800.jpg 800w, images/work-mobile.jpg 858w'
                width='429'
                height='914'
                sizes='(max-width: 429px) 100vw, 914px'
                alt='work-mobile'
              />
            </picture>
          </div>
          <WorkContent setIsHovered={setIsHovered} />
        </div>
        <WorkHistory data={data} setIsHidden={setIsHidden} />
      </div>
      <Client setIsHovered={setIsHovered} setIsHidden={setIsHidden} />
    </div>
  );
};

export default Work;
