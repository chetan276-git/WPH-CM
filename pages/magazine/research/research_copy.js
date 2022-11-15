//import style from '../../getstarted/relationship/relationships.module.scss';
import style from './research.module.scss';

import Image from 'next/image';
import Layout from '../../layout';
import Link from 'next/link';

import { motion } from 'framer-motion';

const imageAnimate = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: { opacity: 1, y: 0 },
  transition: { delay: 5 },
};

import LabelBox from '/component/LabelBox/labelbox';

const Research = () => {

  const ResearchPage = [
    {
      title: 'Ongoing research',
      content: '18 January 2019',
      para: 'Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...',
      content1: 'By',
      content2: 'Stefano shane'
    }


  ];


  return (
    <Layout title='Research - World Prani Healing'>
      <main className={`${style.research_page}`}>
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
                <h1 className='d-inline'>RESEARCH</h1>
              </div>
            </div>
          </div>
        </section>

        <LabelBox titleshow={false} btnvalue='Join classes' />
        {ResearchPage.map((cval, i) => (
          <>
            <section className={`${style.Ongoing_research}`}>
              <div className='container-fluid'>
                <div className='row margin-five-bottom'>
                  <div className='col-md-8 m-auto'>
                    <motion.div
                      className='col-12 text-center'
                      initial={'offscreen'}
                      whileInView={'onscreen'}
                      variants={imageAnimate}
                    >
                      {/* <h3 className='page-heading fw-semibold d-block'>
                    Ongoing research
                  </h3> */}

                      <h3 className='page-heading fw-semibold d-block title mb-0'>{cval.title}</h3>

                    </motion.div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title'>
                          {/* <span>18 January 2019</span> */}
                          <span>{cval.content}</span>
                          <h6 className=''>{cval.para}</h6>
                          <span>{cval.content1} <Link href="#">{cval.content2}</Link></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title bg-white'>
                          <span>18 January 2019</span>
                          <h6 className=''>Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...</h6>
                          <span>By <Link href="#">Ming furry </Link></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title bg-white'>
                          <span>18 January 2019</span>
                          <h6 className=''>Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...</h6>
                          <span>By <Link href="#">Ming furry </Link></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title bg-white'>
                          <span>18 January 2019</span>
                          <h6 className=''>Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...</h6>
                          <span>By <Link href="#">Ming furry </Link></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title bg-white'>
                          <span>18 January 2019</span>
                          <h6 className=''>Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...</h6>
                          <span>By <Link href="#">Ming furry </Link></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3 OngoingShadow bg-white'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='course_thumbnail'>
                          <Image
                            src='/images/800x548.png'
                            width={1}
                            height={0.7}
                            layout='responsive'
                            alt='Course Image'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='content_title bg-white'>
                          <span>18 January 2019</span>
                          <h6 className=''>Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...</h6>
                          <span>By <Link href="#">Ming furry </Link></span>

                        </div>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </section>
          </>
        ))}

        <section className={`${style.research_courses}`}>
          <div className='container'>
            <div className='row margin-five-bottom'>
              <div className='col-md-8 m-auto'>
                <motion.div
                  className='col-12 text-center'
                  initial={'offscreen'}
                  whileInView={'onscreen'}
                  variants={imageAnimate}
                >
                  <h3 className='page-heading fw-semibold d-block'>
                    New and popular from the blog
                  </h3>
                  <p>
                    Lorem ipsum dolor amet consectetur eiusmod tempor incididunt labore magna nostrud exercitation.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3'>

                <Link href='#'>
                  <div className='course_thumbnail'>
                    <Image
                      src='/images/800x548.png'
                      width={1}
                      height={0.65}
                      layout='responsive'
                      alt='Course Image'
                    />
                    <div className='content_wrapper p-3 bg-white'>
                      <h6 className='mb-2'>The best way to predict the future is to create it</h6>
                      <p>
                        <p class="w-95">Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...</p>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-lg-3'>
                <Link href='#'>
                  <div className='course_thumbnail'>
                    <Image
                      src='/images/800x548.png'
                      width={1}
                      height={0.65}
                      layout='responsive'
                      alt='Course Image'
                    />
                    <div className='content_wrapper p-3 bg-white'>
                      <h6 className='mb-2'>Winners make a habit of facturing positive</h6>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...
                    </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-lg-3'>
                <Link href='#'>
                  <div className='course_thumbnail'>
                    <Image
                      src='/images/800x548.png'
                      width={1}
                      height={0.65}
                      layout='responsive'
                      alt='Course Image'
                    />
                    <div className='content_wrapper p-3 bg-white'>
                      <h6 className='mb-2'>Computers are to design as microwaves are to cooking</h6>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...
                    </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='col-lg-3'>
                <Link href='#'>
                  <div className='course_thumbnail'>
                    <Image
                      src='/images/800x548.png'
                      width={1}
                      height={0.65}
                      layout='responsive'
                      alt='Course Image'
                    />
                    <div className='content_wrapper p-3 bg-white'>
                      <h6 className='mb-2'>A company is only as good as the people it keeps</h6>
                      <p>
                        Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...
                    </p>
                    </div>
                  </div>
                </Link>
              </div>


            </div>
          </div>
        </section>




        {/* Footer  */}
      </main>
    </Layout >
  );
};

export default Research;
