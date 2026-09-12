import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import GsapMagnetic from "./animations/GsapMagnetic";

const Footer = ({ currentSound, setIsHidden }) => {
  const [isSound, setIsSound] = useState(true);
  const soundOnRef = useRef(null);
  const soundOffRef = useRef(null);

  const toggleSound = () => {
    setIsSound((prevIsSound) => {
      if (prevIsSound) {
        currentSound?.volume(0);
      } else {
        currentSound?.volume(1);
      }
      return !prevIsSound;
    });
    gsap.fromTo(
      soundOnRef.current,
      { y: isSound ? "0%" : "100%" }, // Always start from 100%
      { y: isSound ? "-100%" : "0%", duration: 0.3 }
    );

    gsap.fromTo(
      soundOffRef.current,
      { y: isSound ? "100%" : "0%" }, // Always start from 100%
      { y: isSound ? "0%" : "-100%", duration: 0.3 }
    );
  };
  return (
    <footer id='js-footer' className='footer'>
      <ul className='footer_socials ul__reset'>
        <li className='social js-social'>
          <GsapMagnetic>
            <a
              className='social_link social_link__dribbble'
              href='https://github.com/akechi17'
              target='_blank'
              aria-label='Visit my Github profile'
              style={{ transform: "translate(0px, 0px)" }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24px'
                height='24px'
                viewBox='0 0 16 16'
              >
                <path
                  fill='#B7AB98'
                  d='M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.7 7.7 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z'
                />
              </svg>
            </a>
          </GsapMagnetic>
        </li>
        <li className='social js-social'>
          <GsapMagnetic>
            <a
              className='social_link social_link__instagram'
              href='https://www.instagram.com/rafiepradipta'
              target='_blank'
              aria-label='Visit my Instagram profile'
              style={{ transform: "translate(0px, 0px)" }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='svg'
              >
                <path
                  d='M17.0912 2.6665H6.90942C6.35229 2.6665 5.80063 2.77624 5.28591 2.98944C4.7712 3.20264 4.30351 3.51514 3.90957 3.90908C3.11396 4.70469 2.66699 5.78377 2.66699 6.90893V17.0907C2.66699 17.6479 2.77673 18.1995 2.98993 18.7143C3.20313 19.229 3.51562 19.6966 3.90957 20.0906C4.70518 20.8862 5.78426 21.3332 6.90942 21.3332H17.0912C17.6484 21.3332 18.2 21.2234 18.7147 21.0102C19.2295 20.797 19.6971 20.4845 20.0911 20.0906C20.485 19.6966 20.7975 19.229 21.0107 18.7143C21.2239 18.1995 21.3337 17.6479 21.3337 17.0907V6.90893C21.3337 6.3518 21.2239 5.80014 21.0107 5.28542C20.7975 4.77071 20.485 4.30303 20.0911 3.90908C19.6971 3.51514 19.2295 3.20264 18.7147 2.98944C18.2 2.77624 17.6484 2.6665 17.0912 2.6665ZM6.06093 6.90893C5.89312 6.90893 5.72907 6.85917 5.58954 6.76593C5.45001 6.6727 5.34125 6.54018 5.27703 6.38514C5.21281 6.2301 5.19601 6.0595 5.22875 5.89491C5.26149 5.73032 5.3423 5.57914 5.46096 5.46047C5.57962 5.34181 5.73081 5.261 5.8954 5.22826C6.05999 5.19552 6.23059 5.21233 6.38563 5.27655C6.54067 5.34076 6.67319 5.44952 6.76642 5.58905C6.85965 5.72858 6.90942 5.89263 6.90942 6.06044C6.90942 6.28548 6.82002 6.50129 6.6609 6.66041C6.50178 6.81953 6.28596 6.90893 6.06093 6.90893ZM12.0003 17.0907C10.9934 17.0907 10.0092 16.7922 9.17197 16.2328C8.33477 15.6734 7.68226 14.8783 7.29694 13.948C6.91162 13.0178 6.8108 11.9942 7.00724 11.0066C7.20367 10.0191 7.68853 9.112 8.40051 8.40002C9.11249 7.68804 10.0196 7.20318 11.0071 7.00675C11.9947 6.81031 13.0183 6.91113 13.9485 7.29645C14.8788 7.68177 15.6739 8.33428 16.2333 9.17148C16.7927 10.0087 17.0912 10.993 17.0912 11.9998C17.0912 13.35 16.5549 14.6449 15.6001 15.5997C14.6454 16.5544 13.3505 17.0907 12.0003 17.0907Z'
                  fill='#B7AB98'
                ></path>
              </svg>
            </a>
          </GsapMagnetic>
        </li>
        <li className='social js-social'>
          <GsapMagnetic>
            <a
              className='social_link social_link__youtube'
              href='https://www.youtube.com/rafiepradipta'
              target='_blank'
              aria-label='Visit my YouTube channel'
              style={{ transform: "translate(0px, 0px)" }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='svg'
              >
                <path
                  d='M19.2611 11.3279L6.57538 3.39932C6.45536 3.32431 6.31745 3.2828 6.17597 3.27908C6.03449 3.27537 5.8946 3.30959 5.77081 3.3782C5.64702 3.44681 5.54386 3.5473 5.47202 3.66924C5.40019 3.79119 5.3623 3.93014 5.3623 4.07167V19.9288C5.3623 20.0703 5.40019 20.2093 5.47202 20.3312C5.54386 20.4532 5.64702 20.5536 5.77081 20.6223C5.8946 20.6909 6.03449 20.7251 6.17597 20.7214C6.31745 20.7177 6.45536 20.6761 6.57538 20.6011L19.2611 12.6726C19.3758 12.6015 19.4705 12.5022 19.5361 12.3843C19.6018 12.2664 19.6363 12.1336 19.6363 11.9986C19.6363 11.8637 19.6018 11.7309 19.5361 11.613C19.4705 11.495 19.3758 11.3958 19.2611 11.3247V11.3279Z'
                  fill='#B7AB98'
                ></path>
              </svg>
            </a>
          </GsapMagnetic>
        </li>
        <li className='social js-social'>
          <GsapMagnetic>
            <a
              className='social_link social_link__linkedin'
              href='https://www.linkedin.com/in/rafiepradipta/'
              target='_blank'
              aria-label='Visit my LinkedIn profile'
              style={{ transform: "translate(0px, 0px)" }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='svg'
              >
                <path
                  d='M7.02814 19.8291H3.44995V8.07215H7.13038V19.8291H7.02814ZM5.18793 6.43641C4.06336 6.43641 3.04102 5.5163 3.04102 4.28949C3.04102 3.16492 3.96112 2.14258 5.18793 2.14258C6.31251 2.14258 7.33485 3.06268 7.33485 4.28949C7.33485 5.5163 6.41474 6.43641 5.18793 6.43641ZM20.7275 19.8291H17.0471V14.104C17.0471 12.7749 17.0471 11.0369 15.2069 11.0369C13.2644 11.0369 13.06 12.4682 13.06 14.0017V19.8291H9.37953V8.07215H12.8555V9.7079C13.3667 8.78779 14.4912 7.86769 16.3314 7.86769C20.0119 7.86769 20.7275 10.3213 20.7275 13.4906V19.8291Z'
                  fill='#B7AB98'
                ></path>
              </svg>
            </a>
          </GsapMagnetic>
        </li>
      </ul>
      <button
        className='footer_sound js-cursor-contract js-footer_sound desc text-uppercase btn-clear'
        onClick={toggleSound}
        onMouseEnter={() => {
          setIsHidden(true);
        }}
        onMouseLeave={() => {
          setIsHidden(false);
        }}
      >
        <span className='footer_sound_label'>Sound</span>
        <span className='footer_sound_list'>
          <span
            ref={soundOnRef}
            className='footer_sound_list_item js-footer_sound_list_item__on'
            style={{
              transform: "translate(0px, 0%)",
            }}
          >
            On
          </span>
          <span
            ref={soundOffRef}
            className='footer_sound_list_item js-footer_sound_list_item__off'
            style={{
              transform: "translate(0px, -100%)",
            }}
          >
            Off
          </span>
        </span>
      </button>
    </footer>
  );
};

export default Footer;
