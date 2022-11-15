import React from 'react';

import style from './courses.module.scss';

import Link from 'next/link';

import { useRouter } from 'next/router';

const SidebarCourses = () => {
  const router = useRouter();

  const navlink = [
    {
      linkname: 'Basic Pranic Healing',
      path: '/courses/basicpranichealing',
    },
    {
      linkname: 'Advanced Pranic Healing',
      path: '/courses/advancedpranichealing',
    },
    {
      linkname: 'Pranic Psychotherapy',
      path: '/courses/pranic-psychotherapy',
    },
    {
      linkname: 'Pranic Crystal Healing',
      path: '/courses/pranic-crystal-healing',
    },
    {
      linkname: 'Psychic Self Defense',
      path: '/courses/psychic-self-defense',
    },
    {
      linkname: 'Pranic Facelift & Body Sculpting',
      path: '/courses/pranic-facelift-&-body-sculpting',
    },
    {
      linkname: 'Achieving oneness with Higher Soul',
      path: '#',
    },
    {
      linkname: 'Arhatic Yoga',
      path: '#',
    },
    {
      linkname: 'Spiritual Business Management',
      path: '#',
    },
    {
      linkname: 'Hinduism Revealed',
      path: '#',
    },
    {
      linkname: 'Christianity Revealed',
      path: '#',
    },
    {
      linkname: 'Buddhism Revealed',
      path: '#',
    },
    {
      linkname: 'Spiritual Essence of Man',
      path: '#',
    },
  ];

  return (
    <>
      <div className={`${style.sidebar_course}`}>
        <h6>All courses</h6>
        <ul className='p-0'>
          {navlink.map((nav, i) => (
            <>
              <li
                key={i}
                className={router.pathname == nav.path ? 'active' : ''}
              >
                <Link href={`${nav.path}`}>{nav.linkname}</Link>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarCourses;
