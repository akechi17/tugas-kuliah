import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import AboutTitles from "../projects/AboutTitles";

const data = [
  {
    title: "Pendidikan",
    description:
      "Membantu siswa mencari informasi, mengerjakan tugas, dan mengikuti pembelajaran daring.",
    speed: 0.5,
  },
  {
    title: "Pekerjaan",
    description:
      "Mengolah dokumen, menyimpan data, berkomunikasi, dan menjalankan sistem informasi.",
    speed: 0.5,
  },
  {
    title: "Komunikasi",
    description:
      "Email, pesan instan, video conference, dan media sosial menghubungkan masyarakat tanpa batas jarak.",
    speed: 0.67,
  },
  {
    title: "Bisnis",
    description:
      "Mengelola keuangan, persediaan, pelanggan, pemasaran, hingga transaksi digital.",
    speed: 0.8,
  },
  {
    title: "Pemerintahan",
    description:
      "Layanan publik, pengelolaan data masyarakat, dan administrasi yang lebih efisien.",
    speed: 0.8,
  },
];

const About = ({ setIsHovered, setIsHidden }) => {
  return (
    <div id='about'>
      <Hero setIsHovered={setIsHovered} />
      <div className='about js-about'>
        <AboutMe setIsHovered={setIsHovered} />
        <div className='about_ido'>
          <div
            className='js-about_ido_coffee about_ido_coffee'
          >
            <div className='js-about_ido_inner about_ido_inner'></div>
          </div>
          <div
            className='js-about_ido_mouse about_ido_mouse'
          >
            <div className='js-about_ido_inner about_ido_inner'></div>
          </div>

          <div className='row'>
            <div className='col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12'>
              <p className='about_content_label container_content body-text text-uppercase'>
                Peran Komputer
              </p>
            </div>
          </div>
          <AboutTitles setIsHidden={setIsHidden} data={data} />
        </div>
      </div>
    </div>
  );
};

export default About;
