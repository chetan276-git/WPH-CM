import styles from './twinhearts.module.scss';
import Layout from '../../layout';

import LabelBox from '/component/LabelBox/labelbox';

import BlogAndArticles from '/component/blogArticles/blogarticles';
import FeedbackAndReview from '/component/feedback/feedback';

const TwinHearts = () => {
  return (
    <Layout title='Twin Heart : World Pranic Healing'>
      <main className={styles.twinhearts}>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/twinhearts-banner.jpg )',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1
                  className='d-inline text-white'
                  style={{ textShadow: '0 0 30px rgb(0 0 0 / 60%)' }}
                >
                  TWIN HEARTS
                </h1>
              </div>
            </div>
          </div>
        </section>
        <LabelBox
          title='TWIN HEART MEDITATION'
          btnvalue='Meditation Practice'
        />
        {/* Twin Heart Meditation Content */}
        <section className='twin-heart-content'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-12 col-md-6 m-auto'>
                <h5>Twin Heart Meditation</h5>
                <p>
                  Meditation on Twin Hearts is an advanced meditation for
                  achieving peace and illumination. It is one of the most
                  effective technique for uplifting physical, mental and
                  emotional health; enhance relationships, harmony, spiritual
                  development and positive life transformation.
                </p>
                <p>
                  Twin hearts refer to heart and crown chakras. The Heart chakra
                  is the center for emotional or human love, and crown chakra is
                  the entry point to higher spiritual consciousness. The
                  practitioner first activates the heart chakra and then crown
                  center by blessing the earth with loving kindness. When crown
                  center is highly developed, one experiences Divine Love and
                  Oneness with all. With regular practice of Twin Hearts the
                  chakras and aura will increase in size, energy body becomes
                  dynamic, more loving and people tend to have magnetic
                  personalities.
                </p>
              </div>
            </div>
            <div className='row text-center mt-5'>
              <div className='col-md-6'>
                <div className='youtub_thumbnail '>
                  <div className='video-wrap'>
                    <iframe
                      src='https://www.youtube.com/embed/9VdjOyjb27A'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen=''
                      width='100%'
                      height='300px'
                      id='fitvid0'
                    ></iframe>
                  </div>
                  <div className='video_content p-5'>
                    <h4>Pranaworld Video on Twin Heart</h4>
                    <p>
                      Meditation on Twin Hearts is a simple yet powerful
                      technique introduced by Grand Master Choa Kok Sui for
                      achieving cosmic consciousness or what we often call
                      &#34;illumination.&#34; It is also a form of service to
                      the world by increasing harmony and peace through becoming
                      a channel to bless the earth with loving-kindness.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='youtub_thumbnail'>
                  <div className='video-wrap'>
                    <iframe
                      src='https://www.youtube.com/embed/x_kPuUMJ8jk'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen=''
                      width='100%'
                      height='300px'
                      id='fitvid0'
                    ></iframe>
                  </div>
                  <div className='video_content p-5'>
                    <h4>Twin heart Meditation Benefits</h4>
                    <p>
                      Benefits of Twin heart Meditation are benefits are amazing
                      .It brings Inner peace , stillness, happiness & Joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeedbackAndReview bgcolor='#faf6f3' />
        <BlogAndArticles section_title='Blogs and articles' />
      </main>
    </Layout>
  );
};

export default TwinHearts;
