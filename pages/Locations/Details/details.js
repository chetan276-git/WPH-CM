import React from 'react';

import Image from 'next/image';

import styles from '../tabs.module.scss';

const Details = () => {
  return (
    <>
      <section className={`${styles.details_co}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='heading'>
                <h3>India</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='flex_wrapper d-flex'>
                <div className='img_wrap'>
                  <Image
                    src='/images/the-teacher.jpg'
                    width={100}
                    height={100}
                    objectFit='cover'
                    layout='responsive'
                    alt='Img'
                  />
                </div>

                <div className='contact-details'>
                  <h4>World Pranic Healing India PVT LTD</h4>
                  <p>
                    <b>Address :</b>
                    <br />
                    2nd floor, Dharsons, 12 Hospital Road, Banglore-560001
                  </p>
                  <p>
                    <b>Phone No:</b>
                    <br />
                    <a href='tel:+91 80 2559 9600'>+91 80 2559 9600</a>
                  </p>
                  <p>
                    <b>Address</b>
                    <br />
                    <a href='mailto:support@worldpranichealing.com'>
                      support@worldpranichealing.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Present in states */}
          <div className='row'>
            <div className='col-12'>
              <p>
                We are present in <b>17 states</b> of India, for other states in
                India please contact the nearest state.
              </p>
            </div>
          </div>
          {/* Table Content */}
          <table width='100%'>
            <thead>
              <tr>
                <th>Foundation</th>
                <th>Regions Covered / Centres</th>
              </tr>
            </thead>
            <tbody>
              <tr className='coun'>
                <td colSpan='2'>Andhra pradesh</td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <a href='#'>Pranic Healing Trust Vijayawada</a>
                </td>
              </tr>
              <tr className='coun'>
                <td colSpan='2'>Jharkhand</td>
              </tr>
              <tr>
                <td>Yoga Vidya Pranic Healing Foundation Trust of Jharkhand</td>
                <tr>
                  JHARKHAND - AUM PRANIC HEALING AND ARHATIC YOGA MEDITATION
                  CENTRE
                </tr>
              </tr>
              <tr>
                <td></td>
                <td>
                  Jharkhand - <a href='#'>GMCKS LIGHTWORKERS DHANBAD</a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Jharkhand - <a href='#'>GMCKS LIGHTWORKERS DHANBAD</a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Jharkhand - <a href='#'>GMCKS LIGHTWORKERS DHANBAD</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Details;
