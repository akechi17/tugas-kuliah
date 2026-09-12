import React from "react";

const historyData = [
  {
    title: "AI",
    heading: "Mesin ikut berpikir",
    client: "Analisis data, mengenali pola, dan memahami bahasa",
    now: true,
  },
  {
    title: "Digital",
    heading: "Semua serba online",
    client: "Transaksi online, belajar daring, dan layanan publik",
  },
  {
    title: "Internet",
    heading: "Dunia dalam genggaman",
    client: "Komputer saling terhubung, informasi menyebar cepat",
  },
  {
    title: "PC",
    heading: "Komputer masuk rumah",
    client: "Digunakan luas untuk kerja, pendidikan, dan pribadi",
  },
  {
    title: "Awal",
    heading: "Sebesar ruangan",
    client: "Perhitungan dan penelitian dengan ukuran sangat besar",
  },
];

const RedWork = () => {
  return (
    <div className="work work__red">
      <div className="row work_experience">
        <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
          <div className="work_content container_content">
            <p className="work_content_label body-text text-uppercase text-dark">
              Perkembangan
            </p>
            <div className="work_content_desc h2">
              <div className="scroll-paragraph-mask text-dark">
                Dari mesin sebesar ruangan hingga kecerdasan buatan —
                perjalanan komputer terus mengubah wajah masyarakat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work_history op-0">
        <div className="row work_heading work_history_heading">
          <div className="col-lg-8 col-sm-10 offset-lg-2 offset-sm-1 col-12">
            <p className="work_content_label body-text text-uppercase container_content mb-0 text-dark">
              Perubahan dari Masa ke Masa
            </p>
          </div>
        </div>
        {historyData.map(({ title, heading, client, now }, i) => (
          <div
            key={i}
            className={`heading-mask ${now ? "heading-mask__now" : ""}`}
          >
            <div className="heading-mask_el container_content heading-mask_el__deep">
              <div className="row">
                <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                  <div className="simple-masking">
                    <div className="simple-masking_el">
                      <span className="h3 mb-1 text-dark">{title}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-8 col-9">
                  <div className="simple-masking_el">
                    <p className="h3 mb-1 text-dark">{heading}</p>
                    <p className="mb-0 desc font-400 text-dark">{client}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="heading-mask_el container_content heading-mask_el__masking">
              <div className="row">
                <div className="col-sm-2 offset-lg-2 offset-sm-1 col-3">
                  <div className="simple-masking">
                    <div className="simple-masking_el">
                      <span className="h3 mb-1 text-dark">{title}</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-8 col-9">
                  <div className="simple-masking_el">
                    <p className="h3 mb-1 text-dark">{heading}</p>
                    <p className="mb-0 desc font-400 text-dark">{client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedWork;
