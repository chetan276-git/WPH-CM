import React from 'react';

import Image from 'next/image';

import styles from '../tabs.module.scss';

const FoundationDetails = () => {
  return (
    <div className={`${styles.details_co}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='heading'>
              <h3>Pranic Healing Trust Vijayawada</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <Image
              src='/images/the-teacher.jpg'
              width={100}
              height={100}
              objectFit='cover'
              layout='responsive'
              alt='Img'
            />
          </div>
          <div className='col-md-8'>
            <div className='contact-details'>
              {/* <h4>World Pranic Healing India PVT LTD</h4> */}
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
    </div>
  );
};

export default FoundationDetails;
