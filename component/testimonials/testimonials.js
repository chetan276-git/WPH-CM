import sytle from "./testimonials.module.scss";

import { Navigation, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTestimonials } from "/services/testimonials";

const imageAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
  transition: { delay: 5 }
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonias = async () => {
    try {
      const response = await getTestimonials("Home");
      setTestimonials(response?.data?.length > 0 ? response.data : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonias();
  }, []);
  return (
    <>
      <section
        className={`${sytle.testimonials} overflow-visible`}
        style={{
          backgroundImage: "url(images/testimonials1.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "100%"
        }}>
        <div className="container">
          <div className="row text-center">
            <motion.div
              className="col"
              style={{ marginTop: "-150px" }}
              initial={"offscreen"}
              whileInView={"onscreen"}
              variants={imageAnimate}>
              <h2 className="fw-semibold">testimonials</h2>
            </motion.div>
          </div>
          <div className="row mt-sm-5 text-center">
            <div className="col">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                // autoplay={{ delay: 3000 }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="swiper-wrappermain">
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonials-content">
                      <p>{testimonial.review}</p>
                      <div className="info-wrapper mt-5">
                        <h5 className="fw-medium text-uppercase">{testimonial.name}</h5>
                        <h6 className="fw-normal">{testimonial.occupation}</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
