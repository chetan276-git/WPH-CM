import React from 'react';

import style from './healing.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { motion } from 'framer-motion';
// import Link from 'next/link';

const opacityAnimte = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

import { BsArrowRightShort } from 'react-icons/bs';

const HealingCourse = ({ bgcolor }) => {
  return (
    <>
      {/* Upcoming Courses Start */}
      <section
        className={`${style.upcoming_courses}`}
        style={{ background: bgcolor }}
      >
        <div className='container'>
          <div className='row heading-title align-items-center margin-four-bottom '>
            <div className='col-12 text-center'>
              <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                WHAT WE OFFER
              </span>
              <h5 className='fw-medium'>Healing courses</h5>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              navigation
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='w-100'
              breakpoints={{
                560: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className='col'>
                  <motion.div
                    className='card border-0'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.3 }}
                  >
                    <div className='img-wrap position-relative'>
                      <Image
                        src='/images/courses/Basic-Pranic-Healing.jpg'
                        width={1}
                        height={0.8}
                        layout='responsive'
                        alt='Basic Pranic Healing'
                      />
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom'>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title='Pranic self Healing'
                        >
                          Basic Pranic Healing
                        </h3>
                        <p className='card-text mt-4'>
                          Understand concepts about Prana and laws of energy in
                          a comprehensive yet simplified manner.
                        </p>
                      </div>
                      <Link
                        href='#'
                        className='fw-semibold fs-5 d-flex justify-content-between align-items-center'
                      >
                        <span className='fw-semibold fs-5 d-flex justify-content-between align-items-center'>
                          MORE DETAILS ..
                          <BsArrowRightShort size={20} />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='col'>
                  <motion.div
                    className='card border-0'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.5 }}
                  >
                    <div className='img-wrap'>
                      <Image
                        src='/images/courses/Advances-Pranic-Healing.jpg'
                        width={1}
                        height={0.8}
                        layout='responsive'
                        alt='Advances Pranic Healing'
                      />
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom '>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title='Achieving oneness with Higher soul'
                        >
                          Advanced Pranic Healing
                        </h3>
                        <p className='card-text mt-4'>
                          learn about colour pranas and their effects on our
                          energy system
                        </p>
                      </div>
                      <Link
                        href='#'
                        className='fw-semibold fs-5 d-flex justify-content-between align-items-center'
                      >
                        <span className='fw-semibold fs-5 d-flex justify-content-between align-items-center'>
                          MORE DETAILS ..
                          <BsArrowRightShort size={20} />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='col'>
                  <motion.div
                    className='card border-0'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.7 }}
                  >
                    <div className='img-wrap position-relative'>
                      <Image
                        src='/images/courses/Pranic-Psychotherapy.jpg'
                        width={1}
                        height={0.8}
                        layout='responsive'
                        alt='Pranic Psychotherapy'
                      />
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom'>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title=' Kundalini yoga'
                        >
                          Pranic Psychotherapy
                        </h3>
                        <p className='card-text mt-4'>
                          learn techniques of healing to treat emotional, mental
                          and other psychological problems.
                        </p>
                      </div>
                      <Link href='#'>
                        <span className='fw-semibold fs-5 d-flex justify-content-between align-items-center'>
                          MORE DETAILS ..
                          <BsArrowRightShort size={20} />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealingCourse;
