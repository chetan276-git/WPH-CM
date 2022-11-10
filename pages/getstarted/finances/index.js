import style from './finances.module.scss';

import Layout from '../../layout';
import GetStartedAbout from '/component/getStartedAbout/index';
import BlogAndArticles from '/component/blogArticles/blogarticles';
import HealingCourse from '/component/healingCourse/index';
import FeedbackAndReview from '/component/feedback/feedback';
import RelatedCourses from '/component/relatedcourses/relatedcourses';

import LabelBox from '/component/LabelBox/labelbox';

const Finances = () => {
  return (
    <Layout>
      <main className={`${style.finance_page}`}>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/PROSPERITY.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1 className='d-inline'>PROSPERITY</h1>
              </div>
            </div>
          </div>
        </section>
        {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
        <LabelBox title='PROSPERITY' btnvalue='Join classes' />

        {/* Main Heading Wrapper */}
        <GetStartedAbout
          subtitle='PRANIC FOR PROSPERITY AND ABUNDANCE'
          title='How does energy healing help with prosperity?'
          description='“Spirituality & Materialism are like the two wings of a bird. We need both to fly.” – Grandmaster Choa Kok Sui.
          Success, prosperity, abundance & wealth can be attained by the application of certain universal laws & materialization techniques revealed in these masterful workshops.'
          btnlink='#'
          btnname='Start with the Twin heart Meditation'
          image='finance_about.jpeg'
        />
        {/* Upcoming Courses Start */}
        <HealingCourse bgcolor='#f7f7f7' />
        {/* What do people think Start */}
        <section
          style={{
            background: '#faf6f3',
          }}
        >
          <FeedbackAndReview />
        </section>
        {/* What do people think End */}
        {/* Blog And Article */}
        <BlogAndArticles />
        {/* Related Courses */}
        <RelatedCourses />
      </main>
    </Layout>
  );
};

export default Finances;
