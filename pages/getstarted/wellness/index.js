import style from './wellness.module.scss';

import Layout from '../../layout';
import HealingCourse from '/component/healingCourse/index';
import BlogAndArticles from '/component/blogArticles/blogarticles';
import FeedbackAndReview from '/component/feedback/feedback';
import RelatedCourses from '/component/relatedcourses/relatedcourses';
import GetStartedAbout from '/component/getStartedAbout/index';

import LabelBox from '/component/LabelBox/labelbox';

const Wellness = () => {
  return (
    <Layout title='Wellness - World Prani Healing'>
      <main className={`${style.wellness}`}>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/wellness.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1 className='d-inline text-white'>WELLNESS</h1>
              </div>
            </div>
          </div>
        </section>
        {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
        <LabelBox title='HEALTH' btnvalue='Explore Basic Class' />

        {/* Main Heading Wrapper */}
        <GetStartedAbout
          subtitle='PRANIC HEALING FOR THE PHYSICAL BODY'
          title='How does energy healing help with physical health ?'
          description='All matter in the universe is fundamentally made up of – ENERGY!!! This series of workshops focuses on utilizing subtle energy (or Prana) to treat and alleviate a large number of ailments and discomforts ranging from physical, emotional, mental, and weight loss and beauty. It is important to emphasize that Pranic Healing is not intended to replace orthodox medicine but is meant as a complementary therapy'
          btnlink='#'
          btnname='Start with the Basic pranic Healing Class '
          image='well1.jpeg'
        />
        <HealingCourse bgcolor='#f7f7f7' />
        {/* What do people think Start */}
        <FeedbackAndReview
          bgImage='/images/bg-reviews-feedbacks.jpg'
          subtitle='Reviews and feedback'
          title='What are some of the feedback we receive?'
        />
        {/* What do people think End */}
        {/* Upcoming Courses End */}
        <BlogAndArticles title='Blogs and articles' />
        {/* Related Courses */}
        <RelatedCourses />
      </main>
    </Layout>
  );
};

export default Wellness;
