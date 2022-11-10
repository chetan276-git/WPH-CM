import style from './relatedcourses.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const RelatedCourses = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const courses = [
    {
      img: '525x431.png',
      label: 'Eligibility : Basic',
      title: 'Spiritual Business Management',
      moreLink: '#',
    },
    {
      img: '525x431.png',
      label: 'Eligibility : None',
      title: 'Achieving Onesness with Higher Soul',
      moreLink: '#',
    },
    {
      img: '525x431.png',
      label: 'Eligibility : Basic',
      title: 'Om Mani Padem Hum',
      moreLink: '#',
    },
    {
      img: '525x431.png',
      label: 'Eligibility : Basic',
      title: 'Advanced Pranic Healing',
      moreLink: '#',
    },
    {
      img: '525x431.png',
      label: 'Eligibility : Basic',
      title: 'Hinduism Revealed',
      moreLink: '#',
    },
  ];

  return (
    <>
      <section className='related_course pt-0 pb-100'>
        <div className='container'>
          <div className='row text-center margin-four-bottom'>
            <div className='col'>
              <span className='mb-1 sub-heading text-uppercase d-block fw-medium text-gradient-sky-blue-pink '>
                LOOKING FOR SOMETHING ELSE ?
              </span>
              <h6>Related courses</h6>
            </div>
          </div>
          <div className='row'>
            <div className={`${style.related_courses} position-relative`}>
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                navigation={{
                  prevEl: swiperNavPrevRef.current,
                  nextEl: swiperNavNextRef.current,
                }}
                spaceBetween={20}
                autoplay
                loop={true}
                // freeMode={true}
                // loopedSlides={5}
                scrollbar={{ draggable: true }}
                className='w-100 swiper-slider'
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                  swiper.params.navigation.nextEl = swiperNavNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
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
                {courses.map((con, i) => (
                  <SwiperSlide key={i}>
                    <div className='col'>
                      <div className='card'>
                        <div className='img-wrap position-relative'>
                          <Image
                            src={`/images/relatedcoures/${con.img}`}
                            width={1}
                            height={0.8}
                            layout='responsive'
                            alt='Higher Soul'
                          />
                          <span className='label fw-medium py-1 px-4 text-white position-absolute text-uppercase'>
                            {con.label}
                          </span>
                        </div>
                        <div className='card-body px-5 text-left'>
                          <div className='inner-content'>
                            <h3
                              className='card-title text-black ellipsis-txt'
                              data-bs-toggle='tooltip'
                              data-bs-placement='bottom'
                              title='Achieving Onesness with Higher Soul'
                            >
                              <Link href='#'>{con.title}</Link>
                            </h3>
                          </div>
                          <Link
                            href={con.moreLink}
                            className='fw-semibold fs-5'
                          >
                            MORE DETAILS ..
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='arrow-wrapper d-flex justify-content-start align-items-center gap-4'>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedCourses;
