import React from "react";

const RedTestimonials = () => {
  return (
    <div
      className='testimonials testimonials__red js-testimonials__red'
      style={{ "--index": 0 }}
    >
      <div className='row'>
        <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
          <p className='testimonials_content_label container_content body-text text-uppercase text-dark'>
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
                margin: "0px",
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
                className='testimonials_thumbs_list js-testimonials_thumbs_list__red'
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  maxWidth: "163.234px",
                  width: "163.234px",
                  maxHeight: "357.703px",
                  height: "357.703px",
                  padding: "0px",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className='testimonials_thumbs_inner'>
                  <ul className='testimonials_thumbs_list_list ul__reset'>
                    <li className='thumb-item'>
                      <span className='thumb-item_inner'>
                        <img
                          src='images/michael-glass.jpg'
                          alt='michael-glass'
                        />
                      </span>
                    </li>
                    <li className='thumb-item'>
                      <span className='thumb-item_inner'>
                        <img src='images/peter-smart.jpg' alt='peter-smart' />
                      </span>
                    </li>
                    <li className='thumb-item is-active'>
                      <span className='thumb-item_inner'>
                        <img src='images/linh-le.jpg' alt='linh-le' />
                      </span>
                    </li>
                  </ul>
                  <span className='testimonials_thumbs_flash js-testimonials_thumbs_flash'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='testimonial_lists row'>
        <div className='col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1'>
          <div className='testimonial'>
            <div className='testimonial_inner container_content'>
              <div className='testimonial_content h2'>
                <p className='mb-0 text-dark'>
                  <span className='d-sm-block d-none'>
                    <b className='text-dark'>“</b>He’s terrible, but it’s
                    <br />
                    his birthday so I’d
                    <br />
                    say something nice
                  </span>
                  <span className='d-sm-none d-block'>
                    <b className='text-dark d-block'>“</b>He’s awful, but
                    <br />
                    it’s his birthday
                    <br />
                    so I’d say
                    <br />
                    something
                    <br />
                    nice
                  </span>
                </p>
              </div>
              <div className='testimonial_info'>
                <p className='testimonial_info_name desc mb-1 text-dark'>
                  Michael Glass
                </p>
                <p className='testimonial_info_position sub-content text-dark'>
                  Group Design Director
                </p>
                <p className='testimonial_info_company sub-content text-dark'>
                  Fantasy Interactive
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial'>
            <div className='testimonial_inner container_content'>
              <div className='testimonial_content h2'>
                <p className='mb-0 text-dark'>
                  <span className='d-sm-block d-none'>
                    <b className='text-dark'>“</b>After countless
                    <br />
                    rounds of feedback,
                    <br />
                    you finally did it right
                  </span>
                  <span className='d-sm-none d-block'>
                    <b className='text-dark d-block'>“</b>After many
                    <br />
                    rounds of feedback,
                    <br />
                    you finally
                    <br />
                    did it right
                  </span>
                </p>
              </div>
              <div className='testimonial_info'>
                <p className='testimonial_info_name desc mb-1 text-dark'>
                  Peter Smart
                </p>
                <p className='testimonial_info_position sub-content text-dark'>
                  Head of Product
                </p>
                <p className='testimonial_info_company sub-content text-dark'>
                  Fantasy Interactive
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial'>
            <div className='testimonial_inner container_content'>
              <div className='testimonial_content h2'>
                <p className='mb-0 text-dark'>
                  <span className='d-sm-block d-none'>
                    <b className='text-dark'>“</b> I’m his wife, he
                    <br />
                    made me say
                    <br />
                    that
                  </span>
                  <span className='d-sm-none d-block'>
                    <b className='text-dark d-block'>“</b> I’m his wife,
                    <br />
                    he made me
                    <br />
                    say that
                  </span>
                </p>
              </div>
              <div className='testimonial_info'>
                <p className='testimonial_info_name desc mb-1 text-dark'>
                  Linh Le
                </p>
                <p className='testimonial_info_position sub-content text-dark'>
                  Project Manager
                </p>
                <p className='testimonial_info_company sub-content text-dark'>
                  Interactive Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedTestimonials;
