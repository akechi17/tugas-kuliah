import React from "react";

const Testimonials = ({ setIsHovered }) => {
  return (
    <div className='testimonials js-testimonials'>
      <div className='row'>
        <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
          <p className='testimonials_content_label container_content body-text text-uppercase'>
            WHAT THEY SAID
          </p>
        </div>
        <div className='col-lg-1 col-2 offset-sm-9 offset-10'>
          <div className='testimonials_thumbs'>
            <div
              className='pin-spacer'
              style={{
                order: 0,
                placeSelf: "auto",
                gridArea: "auto",
                zIndex: "auto",
                float: "none",
                flexShrink: 1,
                display: "block",
                margin: 0,
                inset: "101.042px 0px -458.734px",
                position: "absolute",
                flexBasis: "auto",
                overflow: "visible",
                boxSizing: "border-box",
                width: "163px",
                height: "1646px", 
                padding: "0px 0px 1288px",
              }}
            >
              <div
                className='js-testimonials_thumbs_list testimonials_thumbs_list'
                style={{
                  transform: "translate(0px, 0px)",
                  inset: "0px auto auto 0px",
                  margin: 0,
                  maxWidth: "163.234px",
                  width: "163.234px",
                  maxHeight: "357.703px",
                  height: "357.703px",
                  padding: 0,
                }}
              >
                <div className='testimonials_thumbs_inner'>
                  <ul className='testimonials_thumbs_list_list ul__reset'>
                    {["michael-glass", "peter-smart", "linh-le"].map((name) => (
                      <li key={name} className='thumb-item'>
                        <span className='thumb-item_inner'>
                          <img src={`images/${name}.jpg`} alt={name} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <span className='testimonials_thumbs_flash js-testimonials_thumbs_flash'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial_lists js-testimonial_lists row'>
        <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
          {[
            {
              name: "Michael Glass",
              position: "Group Design Director",
              company: "Fantasy Interactive",
              quote: ["Rafie is seriously", "the best and he", "never complains"],
            },
            {
              name: "Peter Smart",
              position: "Head of Product",
              company: "Fantasy Interactive",
              quote: ["This looks", "amazing.", "Great work!"],
            },
            {
              name: "Linh Le",
              position: "Project Manager",
              company: "Interactive Labs",
              quote: ["He’s a beast.", "His skills are", "insane!"],
            },
          ].map((testimonial, index) => (
            <div key={index} className='testimonial js-testimonial'>
              <div
                className='testimonial_inner container_content js-cursor-extend'
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <div className='testimonial_content h2 scroll-paragraph-parent'>
                  <p className='mb-0 scroll-paragraph-mask js-scroll-paragraph-mask is-masking'>
                    {testimonial.quote.map((line, i) => (
                      <div
                        key={i}
                        className='line'
                        style={{ "--size": "100%" }}
                      >
                        {i === 0 && (
                          <b
                            style={{
                              display: "inline-block",
                              position: "relative",
                            }}
                          >
                            “
                          </b>
                        )}{" "}
                        {line}
                      </div>
                    ))}
                  </p>
                  <p className='mb-0 scroll-paragraph-mask js-scroll-paragraph-mask is-bg'>
                    {testimonial.quote.map((line, i) => (
                      <div
                        key={i}
                        className='line'
                        style={{
                          display: "block",
                          textAlign: "start",
                          width: "100%",
                        }}
                      >
                        {i === 0 && (
                          <b
                            style={{
                              display: "inline-block",
                              position: "relative",
                            }}
                          >
                            “
                          </b>
                        )}{" "}
                        {line}
                      </div>
                    ))}
                  </p>
                </div>
                <div className='testimonial_info'>
                  <p className='testimonial_info_name desc mb-1'>
                    {testimonial.name}
                  </p>
                  <p className='testimonial_info_position sub-content'>
                    {testimonial.position}
                  </p>
                  <p className='testimonial_info_company sub-content'>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
