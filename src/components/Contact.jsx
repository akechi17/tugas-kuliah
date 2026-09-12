import React, { useState } from "react";

const socialLinks = [
  {
    href: "https://github.com/akechi17/",
    label: "Github",
    altLabel: "Karya saya",
  },
  {
    href: "https://www.youtube.com/@rafiepradipta",
    label: "Youtube",
    altLabel: "Tutorial random",
  },
  {
    href: "https://www.linkedin.com/in/rafiepradipta/",
    label: "Linkedin",
    altLabel: "Saya yang serius",
  },
];

const socialLinks2 = [
  {
    href: "https://www.instagram.com/rafiepradipta",
    label: "Instagram",
    altLabel: "Bukan TikTok",
  },
  {
    href: "https://www.facebook.com/rafiepradipta",
    label: "Facebook",
    altLabel: "Cerita sehari-hari",
  },
  {
    href: "https://www.bento.me/rafie/",
    label: "Bento",
    altLabel: "Galeri karya",
  },
];

const socialLinks3 = [
  {
    href: "mailto:pradiptarafie17@gmail.com",
    title: "Email",
    label: "pradiptarafie17@gmail.com",
    altLabel: "Pasti saya baca",
  },
  {
    href: "tel:+62 856 9340 5490",
    title: "Telepon",
    label: "+62 856 9340 5490",
    altLabel: "Jarang saya angkat",
  },
];

const Contact = ({ setIsHovered, setIsHidden }) => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  return (
    <div id='contact'>
      <div id='contact' className='contact container_content'>
        <div className='row'>
          <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
            <p className='contact_label body-text text-uppercase'>Kontak</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-sm-5 offset-lg-2 offset-sm-1 col-12'>
            <ul className='ul__reset'>
              {socialLinks.map(({ href, label, altLabel }) => (
                <li
                  key={label}
                  className={`heading-mask social-link js-cursor-contract heading-mask__now h3 ${
                    selectedTitle === label ? "is-hover" : ""
                  }`}
                  onMouseEnter={() => {
                    setIsHidden(true);
                    setSelectedTitle(label);
                  }}
                  onMouseLeave={() => {
                    setIsHidden(false);
                    setSelectedTitle(null);
                  }}
                >
                  <div className='heading-mask_el heading-mask_el__deep'>
                    <a href={href} className='contact_link' target='_blank'>
                      {label}
                    </a>
                  </div>
                  <div className='heading-mask_el heading-mask_el__masking'>
                    <a
                      href={href}
                      className='text-dark contact_link'
                      target='_blank'
                    >
                      {altLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-lg-3 col-sm-5 col-12'>
            <ul className='ul__reset'>
              {socialLinks2.map(({ href, label, altLabel }) => (
                <li
                  key={label}
                  className={`heading-mask social-link js-cursor-contract heading-mask__now h3 ${
                    selectedTitle === label ? "is-hover" : ""
                  }`}
                  onMouseEnter={() => {
                    setIsHidden(true);
                    setSelectedTitle(label);
                  }}
                  onMouseLeave={() => {
                    setIsHidden(false);
                    setSelectedTitle(null);
                  }}
                >
                  <div className='heading-mask_el heading-mask_el__deep'>
                    <a href={href} className='contact_link' target='_blank'>
                      {label}
                    </a>
                  </div>
                  <div className='heading-mask_el heading-mask_el__masking'>
                    <a
                      href={href}
                      className='text-dark contact_link'
                      target='_blank'
                    >
                      {altLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-lg-3 col-12 contact_content'>
            <div className='row'>
              {socialLinks3.map(({ href, title, label, altLabel }) => (
                <div
                  key={label}
                  className={`col-lg-12 col-sm-5 col-12 ${label === 'Email' ? 'offset-lg-0 offset-sm-1' : ''}`}
                >
                  <div
                    className={`heading-mask contact_info contact_info__top js-cursor-contract heading-mask__now ${
                      selectedTitle === label ? "is-hover" : ""
                    }`}
                    onMouseEnter={() => {
                      setIsHidden(true);
                      setSelectedTitle(label);
                    }}
                    onMouseLeave={() => {
                      setIsHidden(false);
                      setSelectedTitle(null);
                    }}
                  >
                    <div className='heading-mask_el heading-mask_el__deep'>
                      <span className='h4 d-block'>{title}</span>
                      <a className='sub-content' href={href}>
                        {label}
                      </a>
                    </div>
                    <div className='heading-mask_el heading-mask_el__masking'>
                      <span className='h4 d-block text-dark'>{altLabel}</span>
                      <a className='sub-content text-dark' href={href}>
                        {label}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
