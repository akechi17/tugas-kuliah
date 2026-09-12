import React from "react";

const data = [
  {
    title: "Adiktif",
    description:
      "Penggunaan berlebihan membuat terlalu bergantung pada perangkat digital.",
  },
  {
    title: "Anti-Sosial",
    description:
      "Komunikasi digital berlebihan mengurangi interaksi secara langsung.",
  },
  {
    title: "Privasi",
    description:
      "Data pribadi dapat menjadi target pencurian dan penyalahgunaan.",
  },
  {
    title: "Siber",
    description:
      "Penipuan online, pencurian data, dan peretasan semakin marak.",
  },
  {
    title: "Hoaks",
    description:
      "Informasi palsu menyebar sangat cepat di internet.",
  },
  {
    title: "Otomasi",
    description:
      "Sebagian pekerjaan manusia mulai digantikan oleh mesin.",
  },
];

const RedClient = () => {
  return (
    <div className='client client__red'>
      <div className='row client_info'>
        <div className='col-lg-9 col-sm-10 offset-lg-2 offset-sm-1 col-12'>
          <div className='client_content container_content text-dark'>
            <p className='client_content_label body-text text-uppercase'>
              Dampak Negatif
            </p>
            <div className='client_content_desc h2'>
              <div className='scroll-paragraph-mask'>
                Di balik semua manfaatnya, teknologi juga menyimpan risiko
                apabila tidak digunakan dengan bijak.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='client_list op-0 text-dark'>
        <div className='client_list_inner'>
          {data.map(({ title, description }, i) => (
            <div className='heading-mask' key={i}>
              <div className='heading-mask_el heading-mask_el__deep container_content'>
                <div className='row align-items-center'>
                  <div className='col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none'>
                    <div className='simple-masking overflow-hidden'>
                      <h2 className='h1 mb-0 none-break'>{title}</h2>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-4 text-dark col-12 d-lg-none d-block'>
                    <p className='mb-0 desc'>{description}</p>
                  </div>
                </div>
              </div>
              <div className='heading-mask_el heading-mask_el__masking'>
                <div className='row align-items-center'>
                  <div className='col-sm-6 offset-lg-2 offset-sm-1 col-12 d-sm-block d-none'>
                    <div className='simple-masking overflow-hidden'>
                      <h2 className='h1 mb-0 text-dark none-break'>{title}</h2>
                    </div>
                  </div>
                  <div className='col-lg-3 col-sm-4 col-12 text-dark d-sm-none d-block'>
                    <p className='mb-0 desc'>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-sm-6 offset-lg-2 offset-sm-1 col-12'>
            <div className='dots container_content'>
              <span></span> <span></span> <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedClient;
