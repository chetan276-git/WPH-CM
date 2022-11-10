import style from './relationships.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../layout';

import GetStartedAbout from '/component/getStartedAbout/index';
import BlogAndArticles from '/component/blogArticles/blogarticles';
import FeedbackAndReview from '/component/feedback/feedback';
import RelatedCourses from '/component/relatedcourses/relatedcourses';

import { BsArrowRightShort } from 'react-icons/bs';

import { motion } from 'framer-motion';

const imageAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
  transition: { delay: 5 },
};

import LabelBox from '/component/LabelBox/labelbox';

const Relationships = () => {
  return (
    <Layout title='Relationships - World Prani Healing'>
      <main className={`${style.relationships_page}`}>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/relationship-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1 className='d-inline'>RELATIONSHIPS</h1>
              </div>
            </div>
          </div>
        </section>
        {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
        <LabelBox title='EMOTIONAL HEALTH' btnvalue='Join classes' />

        {/* Main Heading Wrapper */}
        <GetStartedAbout
          subtitle='PRANIC HEALING FOR THE PHYSICAL BODY'
          title='How does energy healing help with emotional health & relationships?'
          description='Ancient wisdom and spiritual teachers have been telling us for centuries that meditation will make us happier and a better person. You might have been interested in doing meditation because you want to achieve calmness and stillness, or to have a healthier body, purer mind, or maybe to attract positive things, people and increase your good luck. Your objective might even be to manage your stress, to become happier, more intelligent, to develop intuition or achieve illumination'
          btnlink='#'
          btnname='Start with the Twin heart Meditation'
          image='relation.jpeg'
        />
        {/* Relationship Courses */}
        <section className={`${style.relationship_courses}`}>
          <div className='container'>
            <div className='row margin-five-bottom'>
              <div className='col-md-8 m-auto'>
                <motion.div
                  className='col-12 text-center'
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  variants={imageAnimate}
                >
                  <span className='sub-heading text-uppercase d-inline-block fw-medium text-gradient-sky-blue-pink'>
                    WHAT WE OFFER
                  </span>
                  <h3 className='page-heading fw-semibold d-block'>
                    Relationship courses
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, nostrud exercitation
                    ullamco.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='course_thumbnail'>
                  <Image
                    src='/images/800x548.png'
                    width={1}
                    height={0.65}
                    layout='responsive'
                    alt='Course Image'
                  />
                  <div className='content_wrapper p-5 bg-white'>
                    <h6 className='mb-2'>Pranic Psychotherapy</h6>
                    <p>
                      Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
                      tempor incididunt ut labore et dolore magna.
                    </p>
                    <div className='link_wrap d-flex justify-content-between align-items-center border-top pt-4'>
                      <Link href='#'>
                        <span className='text-uppercase'>more info</span>
                      </Link>
                      <BsArrowRightShort size={30} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='course_thumbnail'>
                  <Image
                    src='/images/800x548.png'
                    width={1}
                    height={0.65}
                    layout='responsive'
                    alt='Course Image'
                  />
                  <div className='content_wrapper p-5 bg-white'>
                    <h6 className='mb-2'>Pranic Psychotherapy</h6>
                    <p>
                      Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
                      tempor incididunt ut labore et dolore magna.
                    </p>
                    <div className='link_wrap d-flex justify-content-between align-items-center border-top pt-4'>
                      <Link href='#'>
                        <span className='text-uppercase'>more info</span>
                      </Link>
                      <BsArrowRightShort size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What do people think Start */}
        <FeedbackAndReview
          bgcolor='#fef6f1'
          subtitle='Reviews and feedback'
          title='What are some of the feedback we receive?'
        />
        {/* What do people think End */}
        <BlogAndArticles title='Blogs and articles' />
        {/* Related Courses */}
        <RelatedCourses />
        {/* Footer  */}
      </main>
    </Layout>
  );
};

export default Relationships;
