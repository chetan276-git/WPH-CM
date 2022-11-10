import style from '../findcourse.module.scss';

const HigherCourses = () => {
  return (
    <>
      <div className={`${style.table_pro} table-responsive-md mt-sm-5`}>
        <table className='table higher'>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th> Course</th>
              <th>Foundation/ Centre</th>
              <th> Eligibility</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className='from-end-date'>24 - 25 Jul</span>
                <br />
                <span className='year'>2022</span>
                <br />
                <span className='time'>9 am to 6 pm</span>
              </td>
              <td>Advanced Pranic Healing</td>
              <td>
                <a href='#' style={{ color: '#828282' }}>
                  MCKS Pranic Healing Nepal Trust
                </a>
              </td>
              <td> Basic Pranic Healing</td>

              <td valign='middle'>
                <a
                  href='#'
                  className='rounded-pill linear_btn linear-gradient-custom text-uppercase fw-semibold text-center text-white'
                >
                  Register
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default HigherCourses;
