import style from './home.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import LabelBox from '/component/LabelBox/labelbox';
import BlogAndArticles from '/component/blogArticles/blogarticles';
import Testimonials from '/component/testimonials/testimonials';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ButtonPrimary from '/component/buttons/linkbtn';
import Button from '/component/buttons/button';

import { getHomeBanner } from '../../services/home';
import { useEffect, useState } from 'react';

const imageAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
  transition: { delay: 5 },
};

const thumbnailAnimation = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
};

const ScaleAnimate = {
  offscreen: { opacity: 0, scale: 0.3 },
  onscreen: { opacity: 1, scale: 1 },
  transition: { delay: 5 },
};

const opacityAnimte = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const [bannerImages, setBannerImages] = useState([]);

  const fetchBannerImages = async () => {
    try {
      const response = await getHomeBanner();
      console.log('>>> ', response.data);
      setBannerImages(response?.data?.length > 0 ? response?.data : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBannerImages();
  }, []);

  return (
    <>
      {/* Slider Home Start */}
      <section className='py-0 position-relative'>
        <div className='container-fluid'>
          <div className='row'>
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              className={`${style.swiper_wrapper} w-100`}
              navigation
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {bannerImages?.length > 0 &&
                bannerImages.map((item, index) => (
                  <SwiperSlide className={style.swiper_slide} key={index}>
                    <div
                      className={`${style.slider_content} h-100 d-flex justify-content-center align-items-center background-pro`}
                      style={{
                        backgroundImage: `url("${item.imageUrl}")`,
                      }}
                    >
                      <div className='inner-content text-center text-uppercase'>
                        <span className='fw-medium d-block'>
                          {item.hero_title}
                        </span>
                        <h1>{item.hero_text}</h1>
                        {item.cta_button_text && (
                          <a
                            href={item.cta_button_url}
                            className='d-inline-block btn_custom text-decoration-none'
                          >
                            {item.cta_button_text}
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Slider Home End */}
      {/* start section CTA new to pranic healing etc */}
      <LabelBox btnvalue='New to Pranic Healing ?' />
      {/* end section */}
      <section className={`${style.grand_master}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <motion.div
                className={`${style.overlap_gap_section} row`}
                initial={'offscreen'}
                whileInView={'onscreen'}
                transition={{ staggerChildren: 0.6 }}
              >
                <motion.div className='col-12 col-md-6' variants={imageAnimate}>
                  <h3 className='page-heading fw-medium d-inline-block'>
                    Grand Master Choa Kok Sui Pranic Healing & Arhatic Yoga
                    School
                  </h3>
                </motion.div>
                <motion.div
                  className='col-12 col-lg-5 col-md-6 offset-lg-1'
                  variants={imageAnimate}
                >
                  <p>
                    Established in 1987, World Pranic Healing Foundation has
                    been spreading Master Choa Kok Sui&#39;s teachings in
                    various countries in Asia, Middle East, Africa and SouthEast
                    Asia.
                  </p>
                  <a href='#' className='text-uppercase fw-semibold pb-2'>
                    More about us
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${style.pranic_healing} pt-0`}
        style={{ visibility: 'visible', animationName: 'fadeIn' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <motion.div
              className={`${style.heading_content} col-12 col-lg-8 col-sm-10 text-center`}
              initial={'offscreen'}
              whileInView={'onscreen'}
              variants={imageAnimate}
            >
              <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                What is Pranic Healing
              </span>
              <h3 className='page-heading fw-semibold d-inline-block'>
                A Way of Life
              </h3>
              <p>
                &#39;Prana&#39; is the Sanskrit word for life force. It is
                called ‘chi’ in China and ‘ki’ in Japan.
              </p>
              <p>
                Pranic Healing is a revolutionary and comprehensive system of
                natural healing techniques that uses prana to treat illness. It
                is a synthesis of ancient, esoteric healing methods that have
                been rediscovered, researched and tested over decades with
                proven success by the founder of Modern Pranic Healing, Grand
                Master Choa Kok Sui.
              </p>
            </motion.div>
          </div>
          <div
            className='row justify-content-center wow animate__fadeIn pt-70'
            style={{ visibility: 'visible', animationName: 'fadeIn' }}
          >
            <iframe
              width={560}
              height={500}
              src='https://www.youtube.com/embed/jtOahTuWi1Y'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen=''
            />
          </div>
          {/* inner section start */}
          <div className={`${style.aspects_of_life}`}>
            <div
              className='row justify-content-center wow animate__fadeIn'
              style={{ visibility: 'visible', animationName: 'fadeIn' }}
            >
              <motion.div
                className='col-12 col-lg-8 col-sm-10 text-center'
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={imageAnimate}
              >
                <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink'>
                  Unique Teachings
                </span>
                <h3 className='page-heading fw-semibold d-inline-block'>
                  Works on all 4 Aspects of Life
                </h3>
                <p>
                  As individuals our primary goal in life is to try and improve
                  our state of well-being, and of those who are near and dear to
                  us. Well-being is not simply the absence of sickness but
                  instead a total state of physical, emotional, mental,
                  financial, and spiritual well-being.
                </p>
              </motion.div>
            </div>
            <div className='row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center pt-70'>
              {/* start feature box item */}
              <div className='col text-center'>
                <Link href='#'>
                  <motion.div
                    className={`${style.feature_box} mv-mb-30 mb-sm-5 feature-box-show-hover box-shadow-large-hover rounded-3 feature-box-bg-white-hover border-all border-color-medium-gray `}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={thumbnailAnimation}
                    transition={{ delay: 0.2 }}
                  >
                    <div className='feature-box-icon margin-30px-bottom'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-activity'
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        stroke='url(#Gradient1)'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <defs>
                          <linearGradient id='Gradient1' x2='100%' y2='100%'>
                            <stop offset='33%' stopColor='#556fff' />
                            <stop offset='50%' stopColor='#e05fc4' />
                            <stop offset='33%' stopColor='#ff798e' />
                          </linearGradient>
                        </defs>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M3 12h4l3 8l4 -16l3 8h4' />
                      </svg>
                    </div>
                    <div className='feature-box-content last-paragraph-no-margin'>
                      <span className='alt-font fw-semibold d-block text-extra-dark-gray text-uppercase margin-5px-bottom'>
                        Health
                      </span>
                      <p className='mb-0'>
                        Heal common health diseases to chronic ones
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div className='col text-center'>
                <Link href='#'>
                  <motion.div
                    className={`${style.feature_box} mv-mb-30 mb-sm-5 feature-box-show-hover box-shadow-large-hover rounded-3 feature-box-bg-white-hover border-all border-color-medium-gray `}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={thumbnailAnimation}
                    transition={{ delay: 0.4 }}
                  >
                    <div className='feature-box-icon margin-30px-bottom'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-heart'
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        stroke='url(#Gradient1)'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <defs>
                          <linearGradient id='Gradient1' x2='100%' y2='100%'>
                            <stop offset='33%' stopColor='#556fff' />
                            <stop offset='50%' stopColor='#e05fc4' />
                            <stop offset='33%' stopColor='#ff798e' />
                          </linearGradient>
                        </defs>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
                      </svg>
                    </div>
                    <div className='feature-box-content last-paragraph-no-margin'>
                      <span className='alt-font fw-semibold d-block text-extra-dark-gray text-uppercase margin-5px-bottom'>
                        Relationships
                      </span>
                      <p className='mb-0'>
                        Heal your emotional body and your relationships
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* end feature box item */}
              {/* start feature box item */}

              <div className='col text-center'>
                <Link href='#'>
                  <motion.div
                    className={`${style.feature_box} mv-mb-30 mb-sm-5 feature-box-show-hover box-shadow-large-hover rounded-3 feature-box-bg-white-hover border-all border-color-medium-gray `}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={thumbnailAnimation}
                    transition={{ delay: 0.6 }}
                  >
                    <div className='feature-box-icon margin-30px-bottom'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-coin'
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        stroke='url(#Gradient1)'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <defs>
                          <linearGradient id='Gradient1' x2='100%' y2='100%'>
                            <stop offset='33%' stopColor='#556fff' />
                            <stop offset='50%' stopColor='#e05fc4' />
                            <stop offset='33%' stopColor='#ff798e' />
                          </linearGradient>
                        </defs>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <circle cx={12} cy={12} r={9} />
                        <path d='M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1' />
                        <path d='M12 6v2m0 8v2' />
                      </svg>
                    </div>
                    <div className='feature-box-content last-paragraph-no-margin'>
                      <span className='alt-font fw-semibold d-block text-extra-dark-gray text-uppercase margin-5px-bottom'>
                        Prosperity
                      </span>
                      <p className='mb-0'>
                        Understand and heal issues related to finances
                      </p>
                    </div>
                    <div className='feature-box-overlay bg-white border-radius-6px' />
                  </motion.div>
                </Link>
              </div>

              {/* end feature box item */}
              {/* start feature box item */}

              <div className='col text-center'>
                <Link href='#'>
                  <motion.div
                    className={`${style.feature_box} mv-mb-30 mb-sm-5 feature-box-show-hover box-shadow-large-hover rounded-3 feature-box-bg-white-hover border-all border-color-medium-gray `}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={thumbnailAnimation}
                    transition={{ delay: 0.8 }}
                  >
                    <div className='feature-box-icon margin-30px-bottom'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-bulb '
                        viewBox='0 0 24 24'
                        strokeWidth='1'
                        stroke='url(#Gradient1)'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <defs>
                          <linearGradient id='Gradient1' x2='100%' y2='100%'>
                            <stop offset='33%' stopColor='#556fff' />
                            <stop offset='50%' stopColor='#e05fc4' />
                            <stop offset='33%' stopColor='#ff798e' />
                          </linearGradient>
                        </defs>
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7' />
                        <path d='M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3' />
                        <line x1='9.7' y1={17} x2='14.3' y2={17} />
                      </svg>
                    </div>
                    <div className='feature-box-content last-paragraph-no-margin'>
                      <span className='alt-font fw-semibold d-block text-extra-dark-gray text-uppercase margin-5px-bottom'>
                        Spirituality
                      </span>
                      <p className='mb-0'>
                        Know your inner self and find your purpose
                      </p>
                    </div>
                    <div className='feature-box-overlay bg-white rounded-3' />
                  </motion.div>
                </Link>
              </div>

              {/* end feature box item */}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section Start */}
      <Testimonials />
      {/* Testimonials Section End */}
      {/* Join us Section Start */}
      <section className={`${style.join_us} pb-0`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <motion.div
                className='content-wrapper'
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={imageAnimate}
              >
                <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                  EXPERIENCE BLISS AND INNER PEACE
                </span>
                <h3 className='text-black page-heading fw-semibold d-block  text-black'>
                  Join us for a Meditation Session to:
                </h3>
                <ul className='p-0 m-0 list_mediation'>
                  <li>
                    <p>Feel the downpour of spiritual energy.</p>
                  </li>
                  <li>
                    <p> Improve your physical and mental health.</p>
                  </li>
                  <li>
                    <p>Bless the earth and receive blessings in return.</p>
                  </li>
                </ul>
                <div className='form-wrapper mt-5'>
                  <form>
                    <input
                      type='text'
                      className='form-control mb-4'
                      placeholder='Enter your name'
                    />
                    <input
                      type='email'
                      className='form-control mb-4'
                      placeholder='Enter your email address'
                    />
                    <div className='button-wrapper mt-5 d-flex'>
                      <ButtonPrimary link='#' value='Get started now' />

                      <a href='#' className='fw-semibold see_video'>
                        See video
                      </a>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
            <div className='col-lg-7'>
              <div className='image-wrapper position-relative w-100 h-100'>
                <div className='w-7'>
                  <Image
                    src='/images/lotus1.jpg'
                    width='100%'
                    height='100%'
                    layout='responsive'
                    alt='Image'
                  />
                </div>
                <div className='overlay-image position-absolute'>
                  <Image
                    src='/images/thm23.jpeg'
                    width='100%'
                    height='60%'
                    objectFit='contain'
                    layout='responsive'
                    alt='Image'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join us Section End */}
      {/* Blog Article Section Start */}
      <BlogAndArticles section_title='News, Research and Articles' />
      {/* Blog Article Section End */}
      {/* Don't miss out Sectio Start */}
      <section
        className={style.dont_miss_out}
        style={{
          backgroundImage:
            'linear-gradient( rgba(0, 0, 0, 0.6) 0%, rgba(20, 20, 20, 0.8) 100%), url(/images/retreat.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 m-auto'>
              <motion.div
                className='content-wrapper text-center w-100 text-white'
                initial={'offscreen'}
                whileInView={'onscreen'}
                variants={ScaleAnimate}
              >
                <h3 className='text-black page-heading d-block fmaily-poppins fw-medium text-white'>
                  GMCKS Arhatic Yoga
                  <br /> Ashram
                </h3>
                <p>Spiritual home for Arhatic Yogis around the world</p>
                <ButtonPrimary
                  link='#'
                  buttonSize='btn-medium'
                  value='EXPLORE'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Don't miss out Sectio End */}
      {/* Online Shop Start */}
      <section className={`${style.online_shop}`}>
        <div className='container'>
          <motion.div
            className='row'
            initial={'offscreen'}
            whileInView={'onscreen'}
            variants={imageAnimate}
          >
            <div className='col-12 text-center'>
              <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                CHECK OUT OUR STORE
              </span>
              <h3 className='text-black page-heading fw-semibold d-block text-capitalize text-black'>
                Online Shop
              </h3>
            </div>
          </motion.div>
          <div className='row row-wrapper'>
            <div className='col-md-4 mv-mb-30'>
              <div className='books-wrapper position-relative'>
                <Image
                  src='/images/shop/book.jpg'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='cover'
                  alt='book img'
                />
                <div className='arrow_circle d-flex justify-content-center align-items-center text-white rounded-circle position-absolute'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className='overlay-wrapper position-absolute w-100 d-flex justify-content-center align-items-end'>
                  <div className='inner_content text-center'>
                    <h6 className='text-white fs-4 mb-5'>
                      Books of
                      <br /> GMCKS
                    </h6>
                    <a href='#'>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 mv-mb-30'>
              <div className='books-wrapper w-100 position-relative'>
                <Image
                  src='/images/shop/audio.jpeg'
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='cover'
                  alt='book img'
                />
                <div className='arrow_circle d-flex justify-content-center align-items-center text-white rounded-circle position-absolute'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className='overlay-wrapper position-absolute w-100 d-flex justify-content-center align-items-end'>
                  <div className='inner_content text-center'>
                    <h6 className='text-white fs-4 mb-5'>
                      Audio&#39;s
                      <br /> and CD&#39;s
                    </h6>
                    <a href='#'>Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='grid-display d-flex justify-content-between flex-column'>
                <div className='books-wrapper w-100 position-relative mv-mb-30'>
                  <Image
                    src='/images/shop/coupon1.jpeg'
                    width='100%'
                    height='45%'
                    layout='responsive'
                    alt='book img'
                  />
                  <div className='arrow_circle d-flex justify-content-center align-items-center text-white rounded-circle position-absolute'>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className='overlay-wrapper position-absolute w-100 d-flex justify-content-center align-items-end'></div>
                </div>
                <div className='books-wrapper w-100 position-relative'>
                  <Image
                    src='/images/shop/store2.jpg'
                    width='100%'
                    height='50%'
                    layout='responsive'
                    alt='book img'
                  />
                  <div className='arrow_circle d-flex justify-content-center align-items-center text-white rounded-circle position-absolute'>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className='overlay-wrapper position-absolute w-100 d-flex justify-content-center align-items-end'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Online Shop End */}
      {/* Upcoming Courses Start */}
      <section className={`${style.upcomg_courses}`}>
        <div className='container'>
          <div className='row heading-title align-items-center'>
            <div className='col-12 col-sm-8'>
              <h3 className='page-heading fw-semibold mb-0 txt-center-mv'>
                A Glimpse of Upcoming Courses / Events
              </h3>
            </div>
            <div className='col-12 col-sm-4'>
              <div className='w-100 d-flex justify-content-end justify-center'>
                <Link href='#' target='_blank'>
                  <span className='fw-semibold'>EXPLORE ALL</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-md-3 g-4 pt-70 '>
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              navigation
              spaceBetween={20}
              scrollbar={{ draggable: true }}
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
                    className='card'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.3 }}
                  >
                    <div className='img-wrap position-relative'>
                      <Image
                        src='/images/courses/Pranic-Crystal-Healing.jpg'
                        className='card-img-top'
                        width='100%'
                        height='90%'
                        layout='responsive'
                        alt='...'
                      />
                      <span className='label fw-medium py-1 px-5 text-white position-absolute text-uppercase'>
                        Online
                      </span>
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom'>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title='Pranic self Healing'
                        >
                          Pranic self Healing
                        </h3>
                        <p className='card-text mt-4'>
                          Dates : 24-25 Sept (Sat-Sun)
                          <br />
                          Time : 9am to 6pm
                        </p>
                      </div>
                      <a
                        href='#'
                        className='fw-semibold fs-5 d-flex justify-content-between align-items-center'
                      >
                        MORE DETAILS ..
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-arrow-right '
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={13} y1={18} x2={19} y2={12} />
                          <line x1={13} y1={6} x2={19} y2={12} />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='col'>
                  <motion.div
                    className='card'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.5 }}
                  >
                    <div className='img-wrap position-relative'>
                      <Image
                        src='/images/courses/Achieving Oneness with the Higher Soul.jpg'
                        className='card-img-top'
                        width='100%'
                        height='90%'
                        layout='responsive'
                        alt='...'
                      />
                      <span className='label fw-medium py-1 px-5 text-white position-absolute text-uppercase'>
                        Online
                      </span>
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom '>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title='Achieving oneness with Higher soul'
                        >
                          Achieving oneness with Higher soul
                        </h3>
                        <p className='card-text mt-4'>
                          Dates : 24-25 Sept (Sat-Sun)
                          <br />
                          Time : 9am to 6pm
                        </p>
                      </div>
                      <a
                        href='#'
                        className='fw-semibold fs-5 d-flex justify-content-between align-items-center'
                      >
                        MORE DETAILS ..
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-arrow-right '
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={13} y1={18} x2={19} y2={12} />
                          <line x1={13} y1={6} x2={19} y2={12} />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='col'>
                  <motion.div
                    className='card'
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    variants={opacityAnimte}
                    transition={{ delay: 0.7 }}
                  >
                    <div className='img-wrap position-relative'>
                      <Image
                        src='/images/courses/AY-Retreat.jpg'
                        className='card-img-top'
                        width='100%'
                        height='90%'
                        layout='responsive'
                        alt='...'
                      />
                      <span className='label fw-medium py-1 px-5 text-white position-absolute text-uppercase'>
                        ELIGIBILITY: AY
                      </span>
                    </div>
                    <div className='card-body px-5 text-left'>
                      <div className='inner-content border-bottom'>
                        <h3
                          className='card-title text-black ellipsis-txt'
                          data-bs-toggle='tooltip'
                          data-bs-placement='bottom'
                          title=' AY Retreat - North India'
                        >
                          AY Retreat - North India
                        </h3>
                        <p className='card-text mt-4'>
                          Dates : 24-25 Sept (Sat-Sun)
                          <br />
                          Time : 9am to 6pm
                        </p>
                      </div>
                      <a
                        href='#'
                        className='fw-semibold fs-5 d-flex justify-content-between align-items-center'
                      >
                        MORE DETAILS ..
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-arrow-right '
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#2c3e50'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <line x1={13} y1={18} x2={19} y2={12} />
                          <line x1={13} y1={6} x2={19} y2={12} />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* Upcoming Courses End */}
      <section className={style.contact_us}>
        <div className='container'>
          <div className='row'>
            <motion.div
              className='col-12 text-center'
              initial={'offscreen'}
              whileInView={'onscreen'}
              variants={imageAnimate}
            >
              <h3 className='text-black page-heading d-block fmaily-poppins fw-semibold text-white'>
                Locate a Centre Near You
              </h3>
            </motion.div>
          </div>
          <div className='row d-flex'>
            <div className='col-md-6'>
              <div className='contact-details'>
                <h3 className='head-office text-black page-heading fw-semibold d-block text-capitalize'>
                  Our head office
                </h3>
                <ul className='p-0 mb-0 mt-5'>
                  <li className='d-flex align-items-start'>
                    <div className='icon-circle rounded bg-dark text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-map-pin'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#fff'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <circle cx={12} cy={11} r={3} />
                        <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
                      </svg>
                    </div>
                    <p className='m-0'>
                      2nd floor, Dharsons 12 Hospital Road,
                      <br /> Bangalore - 560001
                    </p>
                  </li>
                  <li className='d-flex align-items-center'>
                    <div className='icon-circle rounded bg-dark text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-phone'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#ffffff'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2' />
                      </svg>
                    </div>
                    <p className='m-0'>
                      <a href='tel:+91 80 2559 9600'>+91 80 2559 9600</a>
                    </p>
                  </li>
                  <li className='d-flex align-items-center'>
                    <div className='icon-circle rounded bg-dark text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-mail'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#ffffff'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                        <rect x={3} y={5} width={18} height={14} rx={2} />
                        <polyline points='3 7 12 13 21 7' />
                      </svg>
                    </div>
                    <p className='m-0'>
                      <a href='mailto:support@worldpranichealing.com'>
                        support@worldpranichealing.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <form className='mt-5'>
                <div className='mb-3'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your name'
                    className='form-control'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your email address'
                    className='form-control'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Mobile number'
                    className='form-control'
                    required
                  />
                </div>
                <div className='mb-5'>
                  <textarea
                    rows='5'
                    name='message'
                    className='form-control'
                    placeholder='How can we help you?'
                    required
                  ></textarea>
                </div>
                <Button
                  type='submit'
                  buttonSize='btn-medium'
                  value='send message'
                />
              </form>
            </div>
            <div className='col-md-6'>
              <div className='iframe-wrapper w-100 h-100'>
                <iframe
                  className='w-100 h-100'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821917424!2d144.956054!3d-37.817127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1427947693651'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;

export const getServerSideProps = async () => {
  const res = await getHomeBanner();
  let data = res.data?.data?.length > 0 ? res.data?.data : [];
  console.log({ data });
  return {
    props: { bannerImages: data },
  };
};
