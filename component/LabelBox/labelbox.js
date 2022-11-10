import React from 'react';
import style from './labelbox.module.scss';

import PropTypes from 'prop-types';

import Link from 'next/link';
import ButtonPrimary from '/component/buttons/linkbtn';

const LabelBox = ({ titleshow = true, title, btnlink, btnvalue }) => {
  const links = [
    {
      linkname: 'FIND A COURSE',
      link: '#',
    },
    {
      linkname: 'FIND A CENTRE',
      link: '#',
    },
  ];

  return (
    <>
      <section className={`${style.overlap_section} overflow-visible py-0`}>
        <div className='container'>
          <div className='wrapper_innner position-absolute rounded-3 bg-white'>
            <div className='row align-items-center justify-content-center'>
              {titleshow && (
                <div className='col-12 col-md-4'>
                  <div className='content'>
                    {/* Label Title */}
                    <h4 className='d-inline linear-gradient-custom txt-clip'>
                      {title ? title : 'WHAT IS PRANIC HEALING'}
                    </h4>
                  </div>
                </div>
              )}
              <div
                className={titleshow ? 'col-12 col-md-8' : 'col-12 col-md-12'}
              >
                <div className='content w-100'>
                  <ul
                    className={`${
                      titleshow
                        ? 'justify-content-end'
                        : 'justify-content-center'
                    } d-lg-flex align-items-center m-0 p-0`}
                  >
                    {/* Label Links */}
                    {links.map((link, i) => (
                      <>
                        <li className='fw-medium' key={i}>
                          <Link href={`${link.link}`}>{link.linkname}</Link>
                        </li>
                      </>
                    ))}
                    {/* Label Button */}
                    <li>
                      <ButtonPrimary
                        link={btnlink ? btnlink : '#'}
                        buttonSize='btn-small'
                        value={btnvalue}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LabelBox.PropTypes = { title: PropTypes.string, btnlink: PropTypes.string };

export default LabelBox;
