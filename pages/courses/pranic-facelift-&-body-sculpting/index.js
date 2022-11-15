import React from 'react';

import style from '../courses.module.scss';

import LayoutCourse from '../layout';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';
import ButtonPrimary from '/component/buttons/linkbtn';

const PranicFaceliftBody = () => {
  const BasicPranicHealing = [
    {
      title: 'PRANIC FACELIFT AND BODY SCULPTING',
      subtitle: 'Experience the world of prana',
      duration: '2 days (16 hrs)',
      prerequisite: ' Pranic Crystal Healing',
      eligibility: 'Advanced Pranic Healing (level 2)',
      details: [
        {
          title: 'Course Descriptor',
          content:
            'This is specialized workshop for facial rejuvenation, beauty and health. Combing the techniques of Advance Healing, Pranic Crystal and Psychotherapy your skin can look younger, radiant and healthy. Lose excess body weight without surgery, medicine or excess exercise. You can see changes in face and body in weeks’ time.',
        },
        {
          title: 'Course Outline',
          list: [
            {
              listcontent: 'Create a younger and brighter looking skin',
            },
            {
              listcontent: 'Remove the wrinkles, dark circles and pimples',
            },
            {
              listcontent:
                'Heal the organs connected with facial rejuvenation',
            },
            {
              listcontent: 'Remove the negative emotions that contribute to weight gain',
            },
            {
              listcontent: 'Disintegrate the energies that manifest as aging',
            },
            {
              listcontent:
                'Integrate Twin Hearts Meditation to accelerate the healing process',
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
                <h1 className='d-inline text-white'>PRANIC FACELIFT & BODY SCULPTING</h1>
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

export default PranicFaceliftBody;
