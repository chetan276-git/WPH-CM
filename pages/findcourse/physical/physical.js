import style from "./physical.module.scss";
import "./physical.module.css";
import dayjs from "dayjs";
import ReactPaginate from "react-paginate";
const PhysicalCourses = ({ courses, tableFor, currentPage, totalPages, handlePageChange }) => {
  const renderDate = (start, end) => {
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    if (startDate.year() === endDate.year()) {
      if (startDate.month() === endDate.month()) {
        return `${startDate.date()} to ${endDate.date()} ${startDate.format("MMM")} ${startDate.year()}`;
      } else {
        return `${startDate.date()} ${startDate.format("MMM")} to ${endDate.date()} ${endDate.format(
          "MMM"
        )} ${startDate.year()}`;
      }
    }

    return `${startDate.date()} ${startDate.format("MMM")}  ${endDate.year()} to ${endDate.date()} ${endDate.format(
      "MMM"
    )} ${endDate.year()}`;
  };

  const renderTime = (start, end) => {
    const startTime = dayjs("2022-07-01T" + start);
    const endTime = dayjs("2019-07-01T" + end);
    // console.log(start, endTime);
    return `${startTime.format("hh:mm A")} to ${endTime.format("hh:mm A")}`;
  };

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems?.map((item, i) => (
            <div key={i}>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </>
    );
  }

  return (
    <>
      <div className={`${style.table_pro} table-responsive-md mt-sm-5`}>
        <table className="table pysical">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Course</th>
              <th>Foundation/ Centre</th>
              {tableFor !== "HI" && <th>Trainer</th>}
              {tableFor === "PH" && <th>Venue </th>}
              {tableFor === "HI" && <th>Eligibility </th>}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses?.map((course, index) => (
                <tr key={index}>
                  <td>
                    <span className="from-end-date">{renderDate(course.start_date, course.end_date)}</span>
                    <br />
                    <span className="time">{renderTime(course.start_time, course.end_time)}</span>
                  </td>
                  <td>{course.course}</td>
                  <td>{course.foundation ?? course.centre}</td>
                  {tableFor !== "HI" && <td>{course.trainer}</td>}
                  {tableFor === "PH" && <td>{course.venue ?? "NA"}</td>}
                  {tableFor === "HI" && <td>Basic Pranic Healing</td>}
                  <td valign="middle">
                    <a
                      href={course.link}
                      className="rounded-pill linear_btn linear-gradient-custom text-uppercase fw-semibold text-center text-white">
                      Register
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={style.reactPagination}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={totalPages}
          forcePage={currentPage}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};
export default PhysicalCourses;
