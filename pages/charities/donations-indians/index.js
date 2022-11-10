import React from 'react';

import style from '../charities.module.scss';

import Link from 'next/link';
import Layout from '../../layout';
import LabelBox from '/component/LabelBox/labelbox';

const DonationIndiansNationals = () => {
  return (
    <>
      <Layout title='Donations'>
        <main>
          <section
            className='banner-inner-pages'
            style={{
              backgroundImage: 'url(/images/banners/donations.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col text-center '>
                  <h1 className='d-inline text-white'>DONATIONS</h1>
                </div>
              </div>
            </div>
          </section>
          <LabelBox titleshow={false} btnvalue='International Donors' />
          <section className={`${style.donation_content}`}>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 m-auto'>
                  <div className='content_wrapper'>
                    <span className='sub-heading position-relative text-uppercase d-inline-block fw-medium text-gradient-sky-blue-pink '>
                      FOOD FOR THE HUNGRY SERVICE PROJECTS
                    </span>
                    <p>
                      Indian Nationals living in India can donate here.
                      Donations are not allowed for Foreign nationals.
                    </p>
                    <p>Choose the purpose of your donation</p>
                    <div className='button_wrapper'>
                      <div className='text-white d-inline-block linear_btn text-uppercase fw-medium text-decoration-none linear-gradient-custom'>
                        <Link href='#'>For GMCKS Arhatic Yoga Ashram</Link>
                      </div>
                      <div className='text-white d-inline-block linear_btn text-uppercase fw-medium text-decoration-none linear-gradient-custom'>
                        <Link href='#'>
                          For WPHF Bangalore for spreading Pranic healing &
                          research
                        </Link>
                      </div>
                      <div className='text-white d-inline-block linear_btn text-uppercase fw-medium text-decoration-none linear-gradient-custom'>
                        <Link href='#'>MCKS Trust Fund</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      {/* 
            For title = title
            For Button Name = btnvalue
            For Button Link = btnlink
        */}
    </>
  );
};

export default DonationIndiansNationals;
