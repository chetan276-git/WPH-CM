import sytle from './blogarticles.module.scss';

import Image from 'next/image';
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { motion } from 'framer-motion';
import Link from 'next/link';

const imageAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
  transition: { delay: 5 },
};

const BlogAndArticles = ({ title }) => {
  const blogs = [
    {
      blog_img: 'wesak.jpeg',
      sub_title: 'HEALING',
      title: 'A Healthy Body and Peacful Mind',
      date: ' 24 December 2019',
    },
    {
      blog_img: 'wesak.jpeg',
      sub_title: 'SPIRITUALITY',
      title: ' Spirituality V/S Religion',
      date: ' 24 December 2019',
    },
    {
      blog_img: 'wesak.jpeg',
      sub_title: 'RESEARCH',
      title: ' Pranic Healing for Partially Blind- A case study',
      date: ' 24 December 2019',
    },
  ];

  return (
    <>
      <section className={`${sytle.blog_articles}`}>
        <div className='container-fluid'>
          <div className='row margin-five-bottom'>
            <motion.div
              className='col-12 text-center'
              initial={'offscreen'}
              whileInView={'onscreen'}
              variants={imageAnimate}
            >
              <span className='sub-heading text-uppercase d-inline-block fw-medium text-gradient-sky-blue-pink'>
                MORE FROM OUR COMMUNITY
              </span>
              <h3 className='page-heading fw-semibold d-block'>
                {title ? title : 'Blogs and articles'}
              </h3>
            </motion.div>
          </div>
          <div className='row pt-sm-70'>
            <div className='col-11 m-auto'>
              <div className='card-group'>
                <Swiper
                  modules={[Navigation, A11y, Autoplay]}
                  spaceBetween={50}
                  navigation
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
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
                  {blogs.map((bdata) => (
                    <>
                      <SwiperSlide>
                        <div className='card border-0'>
                          <Image
                            src={`/images/${bdata.blog_img}`}
                            className='card-img-top rounded'
                            width={1}
                            height={0.8}
                            layout='responsive'
                            alt='Meditation'
                          />
                          <div className='card-body text-center m-auto d-flex align-items-center position-relative p-5 bg-white rounded'>
                            <div className='w-100'>
                              <span className='text-fast-blue m-sm-3 fw-medium text-uppercase d-block'>
                                {bdata.sub_title}
                              </span>
                              <Link href='#' className='card-title'>
                                {bdata.title}
                              </Link>
                              <p className='card-text text-muted mt-3'>
                                {bdata.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogAndArticles;
