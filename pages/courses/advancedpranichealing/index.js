import React from 'react';

import style from '../courses.module.scss';

import LayoutCourse from '../layout';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';
import ButtonPrimary from '/component/buttons/linkbtn';

const AdvancedPranicHealing = () => {
  const BasicPranicHealing = [
    {
      title: 'ADVANCE PRANIC HEALING (LEVEL 2)',
      subtitle: 'Miracles through colour prana',
      duration: '2 days',
      prerequisite: '16 years and above',
      eligibility: 'Advanced Pranic Healing (level 2)',
      details: [
        {
          title: 'Course Descriptor',
          content:
            'Learn how to utilize color prana for quicker and more effective healing results. It is an advance workshop for those seeking to become effective healers',
        },
        {
          title: 'What are the benefits?',
          list: [
            {
              listcontent: 'Advanced techniques to access higher energy frequencies safely.',
            },
            {
              listcontent: 'Color prana creates a more focused effect on the energy field and the chakras .',
            },
            {
              listcontent:
                'Learn right proportion, colour combinations and degree of hue of coloured prana.',
            },
            {
              listcontent: 'Detailed methods to work with cancer, tumors, diabetes, arthritics, heart and other chronic ailments.',
            },
            {
              listcontent: 'Powerful healing techniques: Rapid Healing of Wounds, Cellular Regeneration, Cleansing of the Internal Organs, Cleansing of the Blood and other techniques to boost the immune system.',
            },
            {
              listcontent:
                'Advanced Aura Cleansing and Instructive Healing',
            },
            {
              listcontent: 'Enhancing your healing power about 70% over Basic Pranic Healing; shorten healing time and much more',
            },
            {
              listcontent: 'Meditation on Twin Hearts with Self-healing',
            }
          ],
        }
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
                <h1 className='d-inline text-white'>ADVANCED PRANIC HEALING</h1>
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
                    <b>Eligibility:</b>
                    {cval.eligibility}
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

export default AdvancedPranicHealing;
