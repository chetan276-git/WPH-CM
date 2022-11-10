import React from 'react';

import Layout from '../../layout';

const BookShop = () => {
  return (
    <>
      <Layout title='Shop Books'>
        <main>
          <section
            className='banner-inner-pages'
            style={{
              backgroundImage: 'url(/images/banners/books-banner.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col text-center '>
                  <h1 className='d-inline text-white'>BOOKS</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default BookShop;
