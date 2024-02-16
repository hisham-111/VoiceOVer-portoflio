import React, { useRef, useState } from "react";
import TestimonialData from "./testimonial-data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { Pagination } from "swiper/modules";

function Testimonial() {
  const [testmonial, setTestimonia] = useState(TestimonialData);
  return (
    <section className="testimonial_section ">
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {testmonial.map((item, id) => (
          <SwiperSlide className="carousel__paragraph" key={id}>
            <div className="testimonial-box">
              <p className="testimonial-text">{item.text}</p>

              <div className="img_name_type">
                <img
                  className="img-testimonial"
                  src={item.img}
                  alt={item.alt}
                  width="45"
                />
                <div className="name_type">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-type">{item.type}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="title--carousel">What Clients are saying</div>
    </section>
  );
}

export default Testimonial;
