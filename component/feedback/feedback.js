import style from './feedback.module.scss';
import { useRef } from 'react';
import Image from 'next/image';

import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const FeedbackAndReview = ({ bgcolor, bgImage, subtitle, title }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const feedback = [
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 4,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
    {
      profile_pic: '125x125.png',
      rating: 5,
      title: 'Spiritual Business Management',
      name: 'Herman Miller',
      designation: 'ThemeZaa Design',
      content: `
      Absolutely amazing theme, flexible and awesome design
      with possibilities. It&#39;s so easy to use and to
      customize.
      `,
    },
  ];

  return (
    <>
      <section
        className={`${style.feedback_reviews} `}
        style={{ background: bgcolor, backgroundImage: `url(${bgImage})` }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <div className='feedback-right-content position-relative w-100'>
                <span className='fw-medium d-block mb-4 text-gradient-sky-blue-pink'>
                  {subtitle ? subtitle : 'TESTIMONIALS'}
                </span>
                <h6>
                  {title
                    ? title
                    : 'What do people say about Twin heart Meditation?'}
                </h6>
              </div>
              <div className='arrow-wrapper d-flex justify-content-start align-items-center gap-4'>
                <div
                  className='swiperNavPrev rounded-circle d-flex justify-content-center align-items-center'
                  ref={swiperNavPrevRef}
                >
                  <BsArrowLeftShort />
                </div>
                <div
                  className='swiperNavNext rounded-circle d-flex justify-content-center align-items-center'
                  ref={swiperNavNextRef}
                >
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                navigation={{
                  prevEl: swiperNavPrevRef.current,
                  nextEl: swiperNavNextRef.current,
                }}
                spaceBetween={20}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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
                    slidesPerView: 3,
                  },
                }}
              >
                {feedback.map((feed, i) => (
                  <SwiperSlide key={i}>
                    <div className='col'>
                      <div className='feedback_swiper_thumbnail bg-white border-1 border'>
                        <div className='d-flex align-items-center gap-4'>
                          <Image
                            src={`/images/${feed.profile_pic}`}
                            className='rounded-circle'
                            width={60}
                            height={60}
                            alt=''
                          />
                          <div className='rating-name'>
                            <div className='rating-starts my-0'>
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                            <span className='d-block name fw-semibold alt-font'>
                              {feed.name}
                            </span>
                            <span className='fw-normal'>
                              {feed.designation}
                            </span>
                          </div>
                        </div>
                        <p className='mb-0 mt-5'>{feed.content}</p>
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

export default FeedbackAndReview;
