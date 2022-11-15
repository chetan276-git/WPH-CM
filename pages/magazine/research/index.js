import style from './research.module.scss';

import Image from 'next/image';
import Layout from '../../layout';
import Link from 'next/link';

// import { motion } from 'framer-motion';

// const imageAnimate = {
//   offscreen: { opacity: 0, y: 100 },
//   onscreen: { opacity: 1, y: 0 },
//   transition: { delay: 5 },
// };

import LabelBox from '/component/LabelBox/labelbox';

const Research = () => {

  const ResearchPage = [
    {
      title: 'Ongoing research',
      details: [
        {
          content: '18 January 2019',
          para: 'Complementary Therapy of Pranic Healing in Managing Moderate Panic Disorder ...',
          content1: 'By',
          content2: 'Stefano shane'
        },
      ]


    }
  ];

  const ResearchBlog = [
    {
      title: 'New and popular from the blog',
      subtitle: 'Lorem ipsum dolor amet consectetur eiusmod tempor incididunt labore magna nostrud exercitation.',
      details: [
        {
          content: 'The best way to predict the future is to create it',
          para: 'Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum has dummy...',
        },
      ]


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
                    <div
                      className='col-12 text-center'
                      initial={'offscreen'}
                      whileInView={'onscreen'}
                    // variants={imageAnimate}
                    >
                      {/* <h3 className='page-heading fw-semibold d-block'>
                    Ongoing research
                  </h3> */}

                      <h3 className='page-heading fw-semibold d-block title mb-0'>{cval.title}</h3>

                    </div>
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
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
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
                        <div className='content_title'>
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
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
                        <div className='content_title'>
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
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
                        <div className='content_title'>
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
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
                        <div className='content_title'>
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
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
                        <div className='content_title'>
                          {cval.details.map((dval, di) => (
                            <>
                              {/* <span>18 January 2019</span> */}
                              <span>{dval.content}</span>
                              <h6 className=''>{dval.para}</h6>
                              <span>{dval.content1} <Link href="#">{dval.content2}</Link></span>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>





                </div>
              </div>
            </section>
          </>
        ))}
        {ResearchBlog.map((cval, i) => (
          <>
            <section className={`${style.research_courses}`}>
              <div className='container'>
                <div className='row margin-five-bottom'>
                  <div className='col-md-8 m-auto'>
                    <div
                      className='col-12 text-center'
                      initial={'offscreen'}
                      whileInView={'onscreen'}
                    // variants={imageAnimate}
                    >
                      <h3 className='page-heading fw-semibold d-block'>
                        {cval.title}
                      </h3>
                      <p>
                        {cval.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-3'>
                    {cval.details.map((dval, di) => (
                      <>
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
                              <h6 className='mb-2'> {dval.content}</h6>
                              <p>
                                <p className="w-95"> {dval.para}</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>


                  <div className='col-lg-3'>
                    {cval.details.map((dval, di) => (
                      <>
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
                              <h6 className='mb-2'> {dval.content}</h6>
                              <p>
                                <p class="w-95"> {dval.para}</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>

                  <div className='col-lg-3'>
                    {cval.details.map((dval, di) => (
                      <>
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
                              <h6 className='mb-2'> {dval.content}</h6>
                              <p>
                                <p class="w-95"> {dval.para}</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>

                  <div className='col-lg-3'>
                    {cval.details.map((dval, di) => (
                      <>
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
                              <h6 className='mb-2'> {dval.content}</h6>
                              <p>
                                <p class="w-95"> {dval.para}</p>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>



                </div>


              </div>
            </section>


          </>
        ))}

        {/* Footer  */}
      </main>
    </Layout >
  );
};

export default Research;
