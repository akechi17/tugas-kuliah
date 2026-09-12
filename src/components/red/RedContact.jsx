import React from "react";

const RedContact = () => {
  return (
    <>
      {/* <div className='motto motto__red'>
        <div className='motto_content container_content'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-8 col-12 motto_content_inner'>
              <div
                
              >
                <p className='text-center h6 text-dark mb-0'>MY MOTTO</p>
                <p className='text-center motto_content_heading h1 text-dark mb-0'>
                  Not ALL
                  <br />
                  honest design
                  <br />
                  is good
                </p>
                <p className='desc text-center text-dark mb-0'>
                  Rafie Pradipta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='contact contact__red container_content op-0'>
        <div className='row'>
          <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
            <p className='contact_label body-text text-uppercase text-dark'>
              Kontak
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12'>
            <ul className='ul__reset'>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://github.com/akechi17'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Karya saya
                </a>
              </li>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://www.youtube.com/rafiepradipta'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Tutorial random
                </a>
              </li>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://www.linkedin.com/in/rafiepradipta/'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Saya yang serius
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-sm-5 col-12'>
            <ul className='ul__reset'>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://www.instagram.com/rafiepradipta'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Bukan TikTok
                </a>
              </li>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://www.facebook.com/rafiepradipta'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Cerita sehari-hari
                </a>
              </li>
              <li className='heading-mask social-link js-cursor-contract heading-mask__now h3'>
                <a
                  href='https://www.bento.me/rafie'
                  className='text-dark contact_link'
                  target='_blank'
                >
                  Galeri karya
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-12 contact_content'>
            <div className='row'>
              <div className='col-lg-12 col-sm-5 offset-lg-0 offset-sm-1 col-12'>
                <div className='heading-mask contact_info contact_info__red contact_info__top js-cursor-contract heading-mask__now'>
                  <span className='h4 d-block text-dark'>
                    Pasti saya baca
                  </span>
                  <a
                    className='sub-content text-dark'
                    href='mailto:pradiptarafie17@gmail.com'
                  >
                    pradiptarafie17@gmail.com
                  </a>
                </div>
              </div>
              <div className='col-lg-12 col-sm-5 col-12'>
                <div className='heading-mask contact_info contact_info__red js-cursor-contract heading-mask__now'>
                  <span className='h4 d-block text-dark'>
                    Jarang saya angkat
                  </span>
                  <a
                    className='sub-content text-dark'
                    href='tel:+62 856 9340 5490'
                  >
                    +62 856 9340 5490
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedContact;
