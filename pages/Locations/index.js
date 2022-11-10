import { useState } from 'react';

import styles from './tabs.module.scss';

import Layout from '../layout';
import Footer from '../common/Footer';

import Details from './Details/details';

const Locations = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Layout>
        <main className={`${styles.tabs_page}`}>
          <section
            className='banner-inner-pages'
            style={{
              backgroundImage: 'url(/images/backgroundgreen.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col text-center '>
                  <h1 className='d-inline'>
                    World Pranic
                    <br /> Healing
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='bloc-tabs'>
                    <h4
                      className={
                        toggleState === 1 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(1)}
                    >
                      India
                    </h4>
                    <h4
                      className={
                        toggleState === 2 ? 'tabs active-tabs' : 'tabs'
                      }
                      onClick={() => toggleTab(2)}
                    >
                      Middle East
                    </h4>
                  </div>
                </div>
                <div className='col-md-9'>
                  <div className='content-tabs'>
                    <div
                      className={
                        toggleState === 1
                          ? 'content  active-content'
                          : 'content'
                      }
                    >
                      <Details />
                    </div>

                    <div
                      className={
                        toggleState === 2
                          ? 'content  active-content'
                          : 'content'
                      }
                    >
                      Middle East
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer style={{ background: '#faf6f3' }}>
          <Footer />
        </footer>
      </Layout>
    </>
  );
};

export default Locations;
