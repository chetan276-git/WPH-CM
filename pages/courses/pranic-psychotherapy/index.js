import React from 'react';

import style from '../courses.module.scss';

import LayoutCourse from '../layout';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';
import ButtonPrimary from '/component/buttons/linkbtn';

const PranicPsychotherapy = () => {
  const BasicPranicHealing = [
    {
      title: 'PRANIC PSYCHOTHERAPY (LEVEL 3)',
      subtitle: 'Experience the world of prana',
      duration: '2 days (16 hours)',
      prerequisite: '16 years and above',
      eligibility: 'Advanced Pranic Healing (level 2)',
      details: [
        {
          title: 'Course Descriptor',
          content:
            'Level 3 is a specialized workshop focusing how to heal emotional and mental imbalances. More advanced techniques to work with psychological disorders and unhealthy patterns',
        },
        {
          title: 'What will you learn?',
          list: [
            {
              listcontent: 'Identifying negative emotions and trauma lodged in the aura and chakras.',
            },
            {
              listcontent: 'Removing negative programming preventing your success .',
            },
            {
              listcontent:
                'Advanced extraction techniques for Phobias, Compulsions, Addictions and Depression.',
            },
            {
              listcontent: 'Self-healing for Stress, Anger, Greif, Irritability, Anxiety and more.',
            },
            {
              listcontent: 'Repairing damaged or cracked protective webs in the chakras .',
            },
            {
              listcontent:
                'Powerful Shielding technique to protect your aura and chakras',
            },
            {
              listcontent:
                'Twin Hearts Meditation with Chakral Healing',
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
                <h1 className='d-inline text-white'>PRANIC PSYCHOTHERAPY</h1>
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

export default PranicPsychotherapy;
