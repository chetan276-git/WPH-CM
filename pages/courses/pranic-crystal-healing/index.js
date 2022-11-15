import React from 'react';

import style from '../courses.module.scss';

import LayoutCourse from '../layout';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';
import ButtonPrimary from '/component/buttons/linkbtn';

const PranicCrystal = () => {
  const BasicPranicHealing = [
    {
      title: 'PRANIC CRYSTAL HEALING (LEVEL 4)',
      subtitle: 'Experience the world of prana',
      duration: '2 days (16 hours)',
      prerequisite: 'Pranic Psychotherapy (level 3)',
      eligibility: 'Advanced Pranic Healing (level 2)',
      details: [
        {
          title: 'Course Descriptor',
          content:
            'Learn to harness the power of crystals and gem stones for healing, relationships, prosperity and spirituality. Become a powerful healer by quickly extracting negative emotions and patterns from chakras and aura.',
        },
        {
          title: 'Course Outline',
          list: [
            {
              listcontent: 'Increasing your healing power by 200 times or more using crystals',
            },
            {
              listcontent: 'Learn to consecrate a crystal to increase crystals power .',
            },
            {
              listcontent:
                'Know more about the qualities and functions of various crystals and gemstones',
            },
            {
              listcontent: 'Learn to cleanse, program and energize a crystal',
            },
            {
              listcontent: 'Learn to disintegrate and extract negative thoughts and emotions quickly and easily',
            },
            {
              listcontent:
                'Usage of crystals as protection from psychic attack',
            },
            {
              listcontent:
                'Usage of crystals and precious stones to enhance productivity, prosperity and spirituality',
            }
          ],
        },

      ],
    },
  ];

  return (
    <>
      <Layout title='World Pranic Healing'>
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
                <h1 className='d-inline text-white'>PRANIC CRYSTAL HEALING</h1>
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
                    <h5 className='title mb-0'>{cval.title.toUpperCase()}</h5>
                    {/* <h6 className='subtitle'>
                      <i>
                        {cval.subtitle.substring(
                          0,
                          cval.subtitle.lastIndexOf(' ')
                        )}
                        <span>{cval.subtitle.split(' ').pop()}</span>
                      </i>
                    </h6> */}
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
                      {/* Youthub Video */}
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
                <ButtonPrimary
                  link='#'
                  buttonSize='btn-small'
                  value='Find this course near you'
                />
              </div>
            </>
          ))}
        </LayoutCourse>
      </Layout>
    </>
  );
};

export default PranicCrystal;
