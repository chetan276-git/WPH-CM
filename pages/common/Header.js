import React, { useState } from 'react';
import { useRouter } from 'next/router';

import style from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ButtonPrimary from '/component/buttons/linkbtn';

import SearchModal from '/component/modals/Search/search';

import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const route = useRouter();

  const [show, setShow] = useState(false);

  return (
    <>
      <div className={`${style.header_page}`}>
        {/* Header Section */}
        <header className='header position-fixed d-block w-100 bg-white d-flex align-items-center'>
          <div className='container-fluid'>
            <div className='wrapper d-flex align-items-center justify-content-between'>
              <div className='header-item-left '>
                <a onClick={() => route.push('/')} className='brand'>
                  <Image
                    src='/images/logo.png'
                    width={280}
                    height={100}
                    objectFit='contain'
                    alt='logo'
                  />
                </a>
              </div>
              <div className='d-flex align-items-center'>
                <div className='header-item-center'>
                  <div className='overlay' />
                  <nav className='menu' id='menu'>
                    <div className='menu-mobile-header'>
                      <button type='button' className='menu-mobile-arrow'>
                        <i className='ion ion-ios-arrow-back' />
                      </button>
                      <div className='menu-mobile-title' />
                      <button type='button' className='menu-mobile-close'>
                        <i className='ion ion-ios-close' />
                      </button>
                    </div>
                    <ul className='menu-section m-0 p-0'>
                      <li className='menu-item'>
                        <Link href='/'>Home</Link>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>About</a>
                        <div className='menu-subs menu-column-1'>
                          <ul>
                            <li>
                              <Link href='/about/wphf'>WPHF</Link>
                            </li>
                            <li>
                              <Link href='/about/ourfounder'>Our Founder</Link>
                            </li>
                            <li>
                              <Link href='#'>Pranic Healing</Link>
                            </li>
                            <li>
                              <Link href='/about/twinhearts'>Twin Hearts</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Get Started</a>
                        <div className='menu-subs menu-column-1'>
                          <ul>
                            <li>
                              <Link href='/getstarted/wellness'>Wellness</Link>
                            </li>
                            <li>
                              <Link href='/getstarted/relationship'>
                                Relationships
                              </Link>
                            </li>
                            <li>
                              <Link href='/getstarted/finances'>Finances</Link>
                            </li>
                            <li>
                              <Link href='/getstarted/spirituality'>
                                Spirituality
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Courses</a>
                        <div className='menu-subs menu-mega menu-column-4'>
                          <div className='list-item'>
                            <h4 className='title'>Wellness</h4>
                            <ul>
                              <li>
                                <Link href='/courses/basicpranichealing'>
                                  Basic Pranic Healing
                                </Link>
                              </li>
                              <li>
                                <Link href='/courses/advancedpranichealing'>
                                  Advanced Pranic Healing
                                </Link>
                              </li>
                              <li>
                                <Link href='/courses/pranic-psychotherapy'>Pranic Psychotherapy</Link>
                              </li>
                              <li>
                                <a href='/courses/pranic-crystal-healing'>Crystal Healing</a>
                              </li>
                              <li>
                                <a href='/courses/psychic-self-defense'>Psychic Self Defense</a>
                              </li>
                            </ul>
                            <h4 className='title'>Prosperity</h4>
                            <ul>
                              <li>
                                <a href='#'>Kriyashakti</a>
                              </li>
                              <li>
                                <a href='#'>Spiritual Business Management</a>
                              </li>
                            </ul>
                          </div>
                          <div className='list-item'>
                            <h4 className='title'>Online courses</h4>
                            <ul>
                              <li>
                                <a href='#'>Self Healing</a>
                              </li>
                              <li>
                                <a href='#'>
                                  Achieving Oneness with the Higher Soul
                                </a>
                              </li>
                            </ul>
                            <h4 className='title'>Spirituality</h4>
                            <ul>
                              <li>
                                <a href='#'>
                                  Achieving Oneness with the Higher Soul
                                </a>
                              </li>
                              <li>
                                <a href='#'>Spiritual Essence of Man</a>
                              </li>
                            </ul>
                            <h4 className='title'>Events</h4>
                            <ul>
                              <li>
                                <Link href='#'>Full Moon Meditations</Link>
                              </li>
                              <li>
                                <Link href='#'>Wesak</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='list-item'>
                            <h4 className='title'>Higher Courses</h4>
                            <ul>
                              <li>
                                <Link href='#'>Lord&apos;s Meditation</Link>
                              </li>
                              <li>
                                <Link href='#'>Hinduism Revealed</Link>
                              </li>
                              <li>
                                <Link href='#'>Buddhism Revealed</Link>
                              </li>
                              <li>
                                <Link href='#'>Christianity Revealed</Link>
                              </li>
                              <li>
                                <Link href='#'>Om Mani Padme Hum</Link>
                              </li>
                            </ul>

                            <ul className='only_links_change'>
                              <li>&nbsp;</li>
                              <li>&nbsp;</li>

                              <li>
                                <Link href='#'>Find a course</Link>
                              </li>
                              <li>
                                <Link href='#'>Find a centre</Link>
                              </li>
                              <li>
                                <Link href='/findcourse'>
                                  Explore all courses
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Magazine</a>
                        <div className='menu-subs menu-column-1'>
                          <ul>
                            <li className='menu-item-has-child-children'>
                              <a href='#'>
                                Articles&nbsp;
                                <i className='ion ion-ios-arrow-down'></i>
                              </a>
                              <div className='menu-child-sub menu-column-1'>
                                <ul>
                                  <li>
                                    <Link href='#'>Energy</Link>
                                  </li>
                                  <li>
                                    <Link href='#'>Wesak</Link>
                                  </li>
                                  <li>
                                    <Link href='#'>Karma</Link>
                                  </li>
                                  <li>
                                    <Link href='#'>Meditation</Link>
                                  </li>
                                  <li>
                                    <Link href='#'>Kundalini</Link>
                                  </li>
                                  <li>
                                    <Link href='#'>5 Virtues</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link href='/magazine/research'>Research</Link>
                            </li>
                            <li>
                              <Link href='#'>News</Link>
                            </li>
                            <li>
                              <Link href='/magazine/video'>Videos</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Ashram</a>
                        {/* <div className='menu-subs menu-column-1'>
                          <ul>
                            <li>
                              <Link href='#'>About Ashram</Link>
                            </li>
                            <li>
                              <Link href='#'>Upcoming events</Link>
                            </li>
                            <li>
                              <Link href='#'>Contact</Link>
                            </li>
                          </ul>
                        </div> */}
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Charities</a>
                        <div className='menu-subs menu-column-1'>
                          <ul>
                            <li>
                              <Link href='/charities/donations-indians'>
                                Donations - Indian Nationals
                              </Link>
                            </li>
                            <li>
                              <Link href='/charities/donations-internationals'>
                                Donations - Internationals
                              </Link>
                            </li>
                            <li>
                              <Link href='#'>WPHF Charities</Link>
                            </li>
                            <li>
                              <Link href='#'>Food for Hungry</Link>
                            </li>
                            <li>
                              <Link href='#'>MCKS Trust Fund</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='#'>Shop</a>
                        <div className='menu-subs menu-column-1'>
                          <ul>
                            <li>
                              <Link href='/shop/books'>Books</Link>
                            </li>
                            <li>
                              <Link href='#'>CDs</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='header-item-right d-flex align-items-center'>
                  <div className='search_icon' onClick={() => setShow(true)}>
                    <AiOutlineSearch color='#ff767e' size={16} />
                  </div>
                  <SearchModal show={show} onHide={() => setShow(false)} />
                  <ButtonPrimary
                    link='#'
                    buttonSize='btn-small'
                    value='Login / Register'
                  />

                  {/* <a href="#" class="menu-icon"><i class="ion ion-md-search"></i></a> */}
                  <button type='button' className='menu-mobile-toggle'>
                    <span />
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
