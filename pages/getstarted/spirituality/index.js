import style from './spirituality.module.scss';

import Layout from '../../layout';
import GetStartedAbout from '/component/getStartedAbout/index';
import HealingCourse from '/component/healingCourse/index';
import FeedbackAndReview from '/component/feedback/feedback';
import BlogAndArticles from '/component/blogArticles/blogarticles';
import RelatedCourses from '/component/relatedcourses/relatedcourses';

import LabelBox from '/component/LabelBox/labelbox';

const Finances = () => {
  return (
    <Layout title='Spirituality - World Prani Healing'>
      <main className={`${style.spirituality}`}>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/spirtuality_banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1 className='d-inline'>SPIRITUALITY</h1>
              </div>
            </div>
          </div>
        </section>
        {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
        <LabelBox title='SPIRITUALITY' btnvalue='Join classes' />
        {/* About Course */}
        <GetStartedAbout
          subtitle='PRANIC FOR THE SOUL'
          title='How does our school help with spirituality?'
          description='Each of Grandmaster Choa Kok Sui’s workshops lead to an unfolding of your Soul’s innate power. Deep spiritual insights about the technology of the Soul, its origins and the future are laid out in a compelling yet transparent manner. Develop spiritually, mentally, emotionally with these series of classes which empower you to be your best self.'
          btnlink='#'
          btnname='Start with the Basic pranic Healing Class '
          image='spirituality-about.jpeg'
        />
        {/* Healing Course */}
        <HealingCourse bgcolor='#f7f7f7' />
        {/* Feedback And Review */}
        <FeedbackAndReview
          bgcolor='#faf6f3'
          subtitle='Reviews and feedback'
          title='What do people think after completing the course?'
        />
        {/* Blog And Articles */}
        <BlogAndArticles title='Blogs and articles' />
        {/* Related Courses */}
        <RelatedCourses />
      </main>
    </Layout>
  );
};

export default Finances;
