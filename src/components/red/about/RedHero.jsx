import React from "react";

const RedHero = () => {
  return (
    <div className="hero hero__red">
      <div className="hero_content">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-10 col-12 hero_content_inner">
            <span className="text-center h6 hero_content_inner_subtitle text-dark">
              Teknologi &amp; Kehidupan
            </span>
            <h1
              className="text-center text-dark js-anim--chars mb-0 anim--chars anim--chars--3d is-handler is-anim-handler"
              data-screen-offset="0.6"
            >
              {["manusia", "di", "balik", "setiap", "layar"].map((word, index) => (
                <div
                  key={index}
                  className="line"
                  style={{
                    display: "block",
                    textAlign: "center",
                    width: "max-content",
                    margin: "0 auto",
                  }}
                >
                  {word.split("").map((char, charIndex) => (
                    <div
                      key={charIndex}
                      className="char"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      {char}
                    </div>
                  ))}
                </div>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedHero;
