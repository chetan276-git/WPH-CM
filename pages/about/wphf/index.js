import style from './wphf.module.scss';
import { useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { motion } from 'framer-motion';

const imageAnimate = {
  offscreen: { opacity: 1, y: -60 },
  onscreen: { opacity: 1, y: 60 },
  transition: { delay: 5 },
};

const Wphf = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const selectedEvent = [
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
    {
      img: '525x431.png',
      link: '#',
    },
  ];

  return (
    <Layout title='About : World Pranic Healing'>
      <section
        className='banner-inner-pages'
        style={{
          backgroundImage: 'url(/images/banner-2-ph.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col text-center'>
              <h1 className='text-white text-shadow-large'>ABOUT WPHF</h1>
            </div>
          </div>
        </div>
      </section>
      <LabelBox title='ABOUT WPHF' btnvalue='Get started' />
      {/* How was World Pranic Born */}
      <section className='pranic_born'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <h5>
                How was World Pranic
                <br /> Healing Foundation Born?
              </h5>
              <div className='about-content'>
                <p>
                  Pranic Healing has been described as a simple and yet very
                  powerful technology that can be employed with immediate
                  benefits to the patients. This quality of Pranic Healing makes
                  it the perfect Healing modality for millions of people
                  suffering from a variety of illnesses who have no access to
                  medicine. It was with this idea in mind that Grand Master Choa
                  Kok Sui decided to bring Pranic Healing to the poor and under
                  developed areas of the world.
                </p>
                <p>
                  Thus was born the World Pranic Healing Foundation on July 23,
                  1990, with a humble beginning where the office was started
                  with only one table and a chair, shared by about 6 employees.
                  They had to use the stack of Pranic Healing books as their
                  chairs during staff meetings. But what they lacked in
                  logistical support, they more than made up for, in terms of
                  Devotion and will-to-do-good. In its first year alone, the
                  Foundation was able to produce more than 3,000 graduates from
                  seven different regions of the Philippines. Initially funded
                  by Master Choa and the Institute for Inner Studies,
                  Incorporated (IISI) which was established on 27 April 1987 by
                  Master Choa Kok Sui, the Foundation eventually attracted other
                  benefactors enabling the organization to continue the work of
                  propagating Pranic Healing throughout the Philippines as well
                  as in other developing countries like Indonesia, India, and
                  parts of Africa and Asia.
                </p>
              </div>
            </div>
            <div className='col-md-5 offset-1'>
              <div className='img_wrapper w-100'>
                {/* <Image
                  src='/images/800x945.png'
                  width={1}
                  height={1}
                  objectFit='cover'
                  layout='responsive'
                  alt='About Image'
                /> */}
                <motion.div
                  className='over_img right-0'
                  variants={imageAnimate}
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                >
                  <Image
                    src='/images/well1.jpeg'
                    width={1}
                    height={1}
                    objectFit='cover'
                    layout='responsive'
                    alt='About Image'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.foundation_today} half-section`}>
        <div className='container text-center'>
          <div className='row margin-six-bottom '>
            <div className='col'>
              <h6>World Pranic Healing Foundation Today</h6>
              <p>
                Today, the Foundation has generated hundreds of thousands of
                Pranic Healing graduates, and inspired, with Master Choa’s
                blessings, many donors from among the Pranic Healing graduates
                from around the world. The Foundation has established healing
                centers in other parts of the Philippines : the Cebu Pranic
                Healing Center in Cebu City on the island of Cebu established in
                1992, and the World Pranic Healing Foundation Region 6 Branch in
                Iloilo City on the island of Panay, started January 2001. In
                addition, the 1st international branch office was established in
                Bangalore, India in 2009 (World Pranic Healing India).
              </p>
            </div>
          </div>
          <div className='row mt-sm-5'>
            <div className='col-md-3'>
              <h2 className='count fw-semibold alt-font mb-0'>20000</h2>
              <span>PRANIC HEALERS</span>
            </div>
            <div className='col-md-3'>
              <h2 className='count fw-semibold alt-font mb-0'>480</h2>
              <span>CENTRES</span>
            </div>
            <div className='col-md-3'>
              <h2 className='count fw-semibold alt-font mb-0'>300</h2>
              <span>TRAINERS</span>
            </div>
            <div className='col-md-3'>
              <h2 className='count fw-semibold alt-font mb-0'>120</h2>
              <span>COUNTRIES</span>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.selected_events}`}>
        <div className='container'>
          <div className='row text-center '>
            <div className='col margin-six-bottom '>
              <span className='sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                A LOOK AT OUR JOURNEY
              </span>
              <h6>Selected Events</h6>
            </div>
            <div className='swiper-wrapper'>
              <div
                className='swiperNavPrev position-absolute rounded-circle text-center'
                ref={swiperNavPrevRef}
              >
                <BsArrowLeftShort />
              </div>
              <div
                className='swiperNavNext position-absolute rounded-circle text-center'
                ref={swiperNavNextRef}
              >
                <BsArrowRightShort />
              </div>
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={30}
                navigation={{
                  prevEl: swiperNavPrevRef.current,
                  nextEl: swiperNavNextRef.current,
                }}
                autoplay
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                  swiper.params.navigation.nextEl = swiperNavNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  560: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {selectedEvent.map((sleEv, i) => (
                  <SwiperSlide key={i}>
                    <Link href={`${sleEv.link}`} className='thumbnail-wrapper'>
                      <Image
                        src={`/images/${sleEv.img}`}
                        width={1}
                        height={1}
                        layout='responsive'
                        alt='Related Courses'
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wphf;
