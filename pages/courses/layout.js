import React from 'react';
import SidebarCourses from './sidebar';

const LayoutCourse = ({ children }) => {
  return (
    <>
      <section className='course_wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SidebarCourses />
            </div>
            <div className='col-md-9'>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutCourse;
