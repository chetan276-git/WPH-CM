import style from './footer.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ dynamicbg }) => {
  return (
    <>
      <div className={`${style.footer}`} style={{ background: dynamicbg }}>
        <div className='container'>
          <div className='row'>
            {/* start footer column */}
            <div className='col-12 col-lg-3 col-sm-6 order-sm-1 order-lg-0 md-margin-40px-bottom xs-margin-25px-bottom'>
              <Link href='#' className='footer-logo'>
                <Image
                  src='/images/logo.png'
                  width={200}
                  height={80}
                  fill
                  objectFit='contain'
                  className='logo'
                  alt='Logo'
                />
              </Link>
              <p>
                Established in 1987, World Pranic Healing Foundation has been
                spreading Master Choa Kok Sui&#39;s teachings in various
                countries in Asia, Middle East, Africa and SouthEast Asia.
              </p>
              <div className={`${style.media_links}`}>
                <ul className='gap-5 d-flex p-0 m-0'>
                  <li>
                    <a
                      className='facebook '
                      href='https://www.facebook.com'
                      rel='noopener'
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>

                  <li>
                    <a
                      className='twitter'
                      href='http://www.twitter.com'
                      rel='noopener'
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      className='instagram'
                      href='http://www.instagram.com'
                      rel='noopener'
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end footer column */}
            {/* start footer column */}
            <div
              className={`${style.footer_link} col-12 col-lg-2 offset-sm-1 col-sm-5 order-sm-2 order-lg-0 md-margin-40px-bottom xs-margin-25px-bottom`}
            >
              <ul>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Centres</a>
                </li>
                <li>
                  <a href='#'>Courses</a>
                </li>
                <li>
                  <a href='#'>The Founder</a>
                </li>
              </ul>
            </div>
            {/* end footer column */}
            {/* start footer column */}
            <div className='col-12 col-lg-2 col-sm-5 offset-sm-1 offset-lg-0 order-sm-4 order-lg-0'>
              <ul className='p-0 m-0'>
                <li>
                  <a href='#'>Ashram</a>
                </li>
                <li>
                  <a href='#'>Donate</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>
            {/* end footer column */}
            {/* start footer column */}
            <div
              className={`${style.footer_newsletter} col-12 col-xl-3 offset-xl-1 col-lg-4 col-sm-6 order-sm-3 order-lg-0`}
            >
              <span className='titile-newsletter d-block fw-medium text-black'>
                Subscribe to newsletter
              </span>
              <p>
                Enter your email address for receiving valuable newsletters.
              </p>
              <form
                action='email-templates/subscribe-newsletter.php'
                method='post'
              >
                <div className='newsletter-style-03 position-relative margin-25px-bottom'>
                  <input
                    className='small-input border-color-medium-gray rounded m-0 required'
                    name='email'
                    placeholder='Enter your email address'
                    type='email'
                  />
                  <input type='hidden' name='redirect' defaultValue />
                  <button type='submit' className='position-absolute border-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-mail'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#fff'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points='3 7 12 13 21 7' />
                    </svg>
                  </button>
                  <div className='form-results rounded d-none position-absolute' />
                </div>
              </form>
              <p>
                © Copyright 2021
                <Link
                  href='#'
                  className='text-decoration-underline text-black fw-medium'
                >
                  Pranic
                </Link>
              </p>
            </div>
            {/* end footer column */}
          </div>
        </div>
        <div className={`${style.bottom_wrapper} py-4 mt-4`}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <ul className='p-0 d-flex justify-content-center align-items-center'>
                  <li>
                    <Link href='#'>Disclaimer</Link>
                  </li>
                  <li>
                    <Link href='#'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href='#'>FAQs</Link>
                  </li>
                  <li>
                    <Link href='#'>Contact us</Link>
                  </li>
                  <li>
                    <span>© Copyright 2022 </span>

                    <Link href='#'>
                      <span
                        style={{
                          textDecoration: 'underline',
                          color: '#232323',
                          fontWeight: '600',
                          fontSize: '12px',
                        }}
                      >
                        WPHF
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
