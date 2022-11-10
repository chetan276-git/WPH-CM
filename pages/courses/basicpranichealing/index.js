import React from 'react';

import style from '../courses.module.scss';

import LayoutCourse from '../layout';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';

const BasicPranicHealing = () => {
  const BasicPranicHealing = [
    {
      title: 'BASIC PRANIC HEALING (LEVEL 1)',
      subtitle: 'Experience the world of prana',
      duration: '2 days (16 hours)',
      prerequisite: '16 years and above',
      details: [
        {
          title: 'Course Descriptor',
          content:
            'Level 1 gives you the skills to harness your energy, regain vitality to areas that have health problems and improve overall health and well-being.',
        },
        {
          title: 'Who should attend?',
          content:
            'Anyone interested in living a healthier, happier and more empowered life. This course has been taught to professionals, students, home makers, teachers, Lawyers, doctors, nurses, massage, therapists and others in every field as they find healing simple, easy and very effective.',
        },
        {
          title: 'What will you learn?',
          list: [
            {
              listcontent: 'Basics of working with your energy body or aura',
            },
            {
              listcontent: '11 Major Chakras and their physical correspondence',
            },
            {
              listcontent:
                'How to scan for energetic imbalances and feel various frequencies',
            },
          ],
        },
        {
          title: 'Find out more ..',
          youthubVlink: 'https://www.youtube.com/embed/Qz1220hWMTw',
          content:
            'This video is a brief introduction to the Basic Pranic Healing course, its format and benefits. The Basic Pranic Healing Course is an intensive, power packed 2 day course that introduces you to the fascinating world of energy healing. We lead you through practical experiments and techniques that give you an insight into the ocean of energy that exists all around us and get your ‘hands moving’ to create positive changes in your life.',
        },
      ],
      buttonLink: [
        {
          btnLink: 'Find this course near you',
        },
        {
          btnLink: 'Notify me of this course',
        },
      ],
    },
  ];

  return (
    <>
      <Layout title='Basic Pranic Healing'>
        <section
          className='banner-inner-pages'
          style={{
            backgroundImage: 'url(/images/banners/basicpranichealing.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col text-center '>
                <h1 className='d-inline text-white'>BASIC PRANIC HEALING</h1>
              </div>
            </div>
          </div>
        </section>
        {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
        <LabelBox titleshow={false} btnvalue='Join classes' />
        <LayoutCourse>
          {BasicPranicHealing.map((cval, i) => (
            <>
              <div className={`${style.course_content}`} key={i}>
                <div className='header_wrapper border-bottom pb-4'>
                  <div className='top_wrapper mb-4'>
                    <h5 className='title text-uppercase mb-0'>{cval.title}</h5>
                    <h6 className='subtitle'>
                      <i>
                        {cval.subtitle.substring(
                          0,
                          cval.subtitle.lastIndexOf(' ')
                        )}
                        <span>{cval.subtitle.split(' ').pop()}</span>
                      </i>
                    </h6>
                  </div>
                  <h4>
                    <b>Duration:</b>
                    {cval.duration}
                  </h4>
                  <h4>
                    <b>Prerequisite:</b>
                    {cval.prerequisite}
                  </h4>
                </div>

                {cval.details.map((dval, di) => (
                  <>
                    <div key={di}>
                      <h3 className='main_title'>{dval.title}</h3>
                      {dval.youthubVlink && (
                        <iframe
                          width='100%'
                          height='280'
                          src={`${dval.youthubVlink}`}
                          title='YouTube video player'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowfullscreen=''
                        ></iframe>
                      )}
                      <p>{dval.content}</p>
                      <ul>
                        {dval.list && (
                          <ul className='p-0'>
                            {dval.list.map((lval, i) => (
                              <>
                                <li style={{ listStyle: 'inherit' }} key={i}>
                                  {lval.listcontent}
                                </li>
                              </>
                            ))}
                          </ul>
                        )}
                      </ul>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </LayoutCourse>
      </Layout>
    </>
  );
};

export default BasicPranicHealing;
