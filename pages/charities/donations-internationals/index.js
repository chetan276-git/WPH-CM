import React from 'react';

import style from '../charities.module.scss';
import Layout from '../../layout';

import LabelBox from '/component/LabelBox/labelbox';
import GetStartedAbout from '/component/getStartedAbout/index';

const DonationIndiansNationals = () => {
  const Foundations = [
    {
      FoundationData: [
        {
          title: 'MCKS FOOD FOR HUNGRY FOUNDATION WEST BENGAL',
          address: '4, Sunny Park, Kolkata, West Bengal 700019',
          phone: '033 3053 9300',
          TableData: [
            {
              trustee: 'Yashodhara Khaitan',
              name: '	Managing Trustee',
            },
            {
              trustee: 'Gurnit Kaur Patheja',
              name: 'Trustee',
            },
            {
              trustee: 'Gurnit Kaur Patheja',
              name: 'Trustee',
            },
          ],
        },
      ],
    },
    {
      FoundationData: [
        {
          title: 'MCKS FOOD FOR HUNGRY CARING HEART INDIA WEST BENGAL',
          address: '4, Sunny Park, Kolkata, West Bengal 700019',
          phone: '033 3053 9300',
          TableData: [
            {
              trustee: 'Raj K Lakhotia',
              name: 'Managing Trustee',
            },
            {
              trustee: 'Sutapa Roy',
              name: 'Secretary',
            },
            {
              trustee: 'Vinod Khetan',
              name: 'Treasurer',
            },
            {
              trustee: 'Aditi Kohli',
              name: '	Trustee',
            },
            {
              trustee: 'Runit Harlalka',
              name: '		Trustee',
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Layout title='Donations'>
        <main>
          <section
            className='banner-inner-pages'
            style={{
              backgroundImage:
                'url(/images/banners/donations-internationals.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col text-center '>
                  <h1 className='d-inline text-white'>FOOD FOR HUNGRY</h1>
                </div>
              </div>
            </div>
          </section>
          <LabelBox titleshow={false} btnvalue='International Donors' />
          {/* Main Heading Wrapper */}
          <GetStartedAbout
            subtitle='PRANIC FOR PROSPERITY AND ABUNDANCE'
            title={false}
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco.'
            btnlink='#'
            btnname='Start with the Twin heart Meditation'
            image='donation-about-internationals.jpeg'
          />
          <div className={`${style.donation_tables}`}>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  {Foundations.map((foun, i) => (
                    <div className='table_content' key={i}>
                      {foun.FoundationData.map((fval, i) => (
                        <div key={i}>
                          <h4 className='title mb-3'>
                            {fval.title.toUpperCase()}
                          </h4>
                          <div className='address_phone'>
                            <p>
                              <b>Address:</b> {fval.address}
                            </p>
                            <p>
                              <b>Phone</b> {fval.phone}
                            </p>
                          </div>
                          <table className='table mt-4'>
                            <tr className='t-heading'>
                              <th>Trustee</th>
                              <th>Name</th>
                            </tr>
                            <tbody>
                              {fval.TableData.map((tval, i) => (
                                <>
                                  <tr key={i}>
                                    <td>{tval.name}</td>
                                    <td>{tval.trustee}</td>
                                  </tr>
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
