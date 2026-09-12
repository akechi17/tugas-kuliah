import React from "react";

const Hero = ({ setIsHovered }) => {
  return (
    <div className='hero'>
      <div className='hero_bg' data-lenis-parallax='.5'>
        <div
          className='w-100 h-100 js-anim--scale anim--fade is-handler is-anim-handler is-anim-completed'
          data-screen-offset='0.3'
        >
          <video
            id='hero-bg-video'
            autoPlay
            muted
            playsInline
            loop
            preload='auto'
            data-pc='video/orv1_mobile.mp4'
            data-mobile='video/orv1_mobile.mp4'
            src='video/orv1_mobile.mp4'
          />
        </div>
      </div>

      <div className='hero_content'>
        <div className='row justify-content-center'>
          <div
            className='col-lg-6 col-sm-10 col-12 hero_content_inner js-cursor-extend'
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <h6
              className='text-center hero_content_inner_subtitle js-anim--lines--sim anim--lines only--line-mask is-handler is-anim-handler is-running'
              data-screen-offset='0.8'
            >
              <span
                className='d-block line--mask-element'
                style={{ transform: "translate(0px, 0%)" }}
              >
                Komputer &amp; Masyarakat
              </span>
            </h6>

            <h1
              className='text-center js-anim--chars mb-0 anim--chars anim--chars--3d is-handler is-anim-handler'
              data-screen-offset='0.6'
            >
              {["komputer", "mengubah", "dunia", "sejak", "1946"].map(
                (word, index) => (
                  <div
                    key={index}
                    className='line'
                    style={{
                      display: "block",
                      textAlign: "center",
                      width: "fit-content",
                      margin: "0 auto",
                    }}
                  >
                    {index === 1 || index === 2 ? (
                      <strong>
                        {word.split("").map((char, charIndex) => (
                          <span key={charIndex} className='char'>
                            {char}
                          </span>
                        ))}
                      </strong>
                    ) : (
                      word.split("").map((char, charIndex) => (
                        <span key={charIndex} className='char'>
                          {char}
                        </span>
                      ))
                    )}
                  </div>
                )
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
