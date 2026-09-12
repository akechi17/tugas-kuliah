import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion as motion3D } from "framer-motion-3d";
import Titles from "../projects/Titles";
import { useScroll } from "framer-motion";
import ClientContent from "./ClientContent";

const data = [
  {
    title: "Cepat",
    description:
      "Pengolahan data jauh lebih singkat dibandingkan proses manual.",
    speed: 0.5,
  },
  {
    title: "Informatif",
    description:
      "Informasi dari berbagai sumber dapat diperoleh melalui internet.",
    speed: 0.5,
  },
  {
    title: "Produktif",
    description:
      "Pekerjaan menjadi lebih efisien dengan aplikasi dan sistem komputer.",
    speed: 0.67,
  },
  {
    title: "Terhubung",
    description:
      "Jarak tidak lagi menjadi hambatan utama dalam berkomunikasi.",
    speed: 0.8,
  },
  {
    title: "Edukatif",
    description:
      "Akses materi dan sumber belajar digital semakin terbuka luas.",
    speed: 0.8,
  },
  {
    title: "Ekonomi",
    description:
      "Internet dan teknologi digital menciptakan pekerjaan dan bisnis baru.",
    speed: 0.8,
  },
];

const Client = ({ setIsHovered, setIsHidden }) => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  /* Used for smooth rotation if you're not using Lenis Scroll */
  // const smoothRotation = useSpring(scrollYProgress, {
  // damping: 20
  // });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/images/color.jpg",
    "/images/normal.png",
    "/images/occlusion.jpg",
  ]);

  return (
    <div className='client js-client' id='client'>
      <div className='row client_info'>
        <div className='col-lg-9 col-sm-10 offset-lg-2 offset-sm-1 col-12'>
          <div
            className='client_content container_content js-cursor-extend'
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <p className='client_content_label body-text text-uppercase'>
              Dampak Positif
            </p>
            <ClientContent />
          </div>
        </div>
      </div>

      <div
        className='client_list'
      >
        <div
          className='client_list_3d'
          data-lenis-speed='.1'
        >
          <Canvas
            ref={scene}
            className='js-client_list_3d client_list_3d_inner'
          >
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
            <motion3D.mesh scale={3} rotation-y={scrollYProgress}>
              <sphereGeometry args={[1, 64, 64]} />
              <meshStandardMaterial
                map={color}
                normalMap={normal}
                aoMap={aoMap}
              />
            </motion3D.mesh>
          </Canvas>
          <div className='client_list_3d_image'>
            <img src='images/planet-1-1.png' alt='planet' />
          </div>
        </div>

        <div className='client_list_inner'>
          <Titles data={data} setIsHidden={setIsHidden} />
        </div>
        <div className='row'>
          <div className='col-lg-10 offset-lg-2 col-sm-11 offset-sm-1 col-12'>
            <div className='dots container_content'>
              <span></span> <span></span> <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
