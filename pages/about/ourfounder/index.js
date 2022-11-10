import style from './founder.module.scss';

import Layout from '../../layout';

import LabelBox from '/component/LabelBox/labelbox';

const OurFounder = () => {
  return (
    <Layout title='Out Founder : World Pranic Healing'>
      <main className={`${style.founder}`}>
        {/* Banner Section */}
        <section
          className='founder_banner py-0'
          style={{
            backgroundImage: 'url(/images/the-teacher.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: '100%',
          }}
        >
          <div
            className='circle_style position-absolute'
            style={{
              backgroundImage: 'url(/images/circle_vector.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left',
              backgroundSize: 'contain',
            }}
          ></div>
        </section>

        <LabelBox title='OUR FOUNDER' btnvalue='Get started' />

        <section className='grand_master'>
          <div className='container'>
            <div className='row text-center margin-five-bottom '>
              <div className='col-12'>
                <h6>Grand Master Choa Kok Sui</h6>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-5'>
                <div className='inner_content'>
                  <span className='mb-sm-5 d-inline-block fw-medium'>
                    THE AUTHOR
                  </span>
                  <p>
                    The emphatic quality of GMCKS&#39; teaching style is
                    reflected clearly in his books. The simple writing style of
                    Master Choa Kok Sui, devoid of any clutter, is adequate
                    proof of his uncomplicated and dynamic style of teaching.
                    His books provide quick and deep insights into energy and
                    its modern day applications such as in healing, good health,
                    emotional balance, mental clarity, spiritual growth and a
                    prosperous life. His books provide a good slice of his
                    teachings to those unable to attend his courses. Through his
                    writing, he wished to prepare the masses for a major shift
                    in consciousness.
                  </p>
                  <p>
                    As various ancient `secrets` of esoterism are revealed to
                    the practitioners, they get to lead lives that are fuller
                    and more stress-free. GMCKS wrote and published 20 books
                    that were translated into more than 27 languages and deal
                    with the subjects of healing, spirituality and psychic
                    self-defense among others.
                  </p>
                </div>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <div className='inner_content'>
                  <span className='mb-sm-5 d-inline-block fw-medium'>
                    THE TEACHER
                  </span>
                  <p>
                    People often wonder how a successful businessman and an
                    adept scientist can also be an enlightened guru. It is the
                    perfect blending of these varied qualities that made Master
                    Choa Kok Sui a unique spiritual teacher for our modern
                    times. He travelled ceaselessly across the globe, teaching
                    people from all walks of life. His distinctive quality as a
                    teacher was his ability to cause significant shifts in the
                    consciousness of his students. Even by the end of a two-day
                    session, students can experience spiritual elevation, mental
                    alertness, emotional balance and higher levels of energy.
                  </p>
                  <p>
                    The teaching methodology of GMCKS was essentially practical
                    and worldly. His lessons can be learnt over a relatively
                    short period of time and are applicable to various aspects
                    of life. The teachings hold relevance for all his students
                    throughout their lifetimes as Pranic Healing addresses the
                    real needs of everyday life.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt-sm-5 justify-content-center'>
              <div className='col-md-5'>
                <div className='inner_content'>
                  <span className='mb-sm-5 d-inline-block fw-medium'>
                    THE AUTHOR
                  </span>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                <div className='inner_content'>
                  <span className='mb-sm-5 d-inline-block fw-medium'>
                    THE TEACHER
                  </span>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default OurFounder;
