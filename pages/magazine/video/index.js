import React from 'react';

import Layout from '../../layout';

const MaganizeVideo = () => {
  return (
    <>
      <Layout title='Video'>
        <main>
          <section
            className='banner-inner-pages'
            style={{
              backgroundImage: 'url(/images/banners/video_banner.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col text-center '>
                  <h1 className='d-inline text-white'>VIDEOS</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default MaganizeVideo;
