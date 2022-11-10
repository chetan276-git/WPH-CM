import { useState, useEffect, useCallback } from "react";
import style from "./findcourse.module.scss";

import Header from "../common/Header";
import Head from "next/head";
import Loader from "../../component/loader";

import PhysicalCourses from "./physical/physical";

import Footer from "../common/Footer";
import { getCourses } from "../../services/courses";

const FindCourse = ({ coursesProp }) => {
  const [tableFor, setTableFor] = useState("PH");

  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filterByCountry, setFilterByCountry] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchCourse = useCallback(
    async (page) => {
      try {
        setLoading(true);
        const axiosRes = await getCourses({ page, tableFor });

        setCourses(axiosRes.data.courses || []);
        setTotalPages(axiosRes.data.pages);
        console.log(axiosRes.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
    [tableFor]
  );

  useEffect(() => {
    fetchCourse(currentPage);
  }, [coursesProp, tableFor, filterByCountry, currentPage, fetchCourse]);

  // eslint-disable-next-line no-unused-vars
  const fileterCourses = useCallback(() => {
    if (coursesProp) {
      return coursesProp.filter((course) => {
        if (!filterByCountry || filterByCountry === "") {
          return course.course_type === tableFor;
        } else {
          return course.course_type === tableFor && course.country === filterByCountry;
        }
      });
    }
  }, [coursesProp, tableFor, filterByCountry]);

  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page.selected);
    fetchCourse(page.selected);
  };

  const setTableForFn = (value) => {
    if (value === tableFor) return;
    setTableFor(value);
    setCurrentPage(0);
  };

  return (
    <Loader loading={loading}>
      <Head>
        <title>World Pranic Healing</title>
      </Head>
      <Header />
      <section
        className="banner-inner-pages"
        style={{
          backgroundImage: "url(/images/backgroundblue.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}>
        <div className="container">
          <div className="row">
            <div className="col text-center ">
              <h1>FIND A COURSE</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.find_course} overflow-visible`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="overlap_section position-relative rounded-3 bg-white w-100">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="content content-left d-flex align-items-center justify-content-between">
                      <h4 className="d-inline fw-bold linear-gradient-custom txt-clip">SEARCH IN :</h4>
                      <select
                        name="search"
                        className="form-control"
                        onChange={(event) => {
                          setFilterByCountry(event.target.value);
                        }}>
                        <option value="">Select a Country</option>
                        <option value="India" selected="">
                          India
                        </option>
                        <option value="Nepal">Nepal</option>
                        <option value="West Africa">West Africa</option>
                        <option value="East Africa">East Africa</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Middle East">Middle East</option>
                        <option value="Phillipines">Phillipines</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="content w-100">
                      <ul className="d-lg-flex justify-content-end align-items-center m-0 p-0">
                        <li className="fw-medium ">
                          <a href="#" className="linear-gradient-custom txt-clip">
                            CENTRES
                          </a>
                        </li>
                        <li href="#" className="fw-medium ">
                          <a href="#" className="linear-gradient-custom txt-clip active">
                            COURSES
                          </a>
                        </li>
                        <li className="fw-medium">
                          <a href="#" className="linear-gradient-custom txt-clip">
                            EVENTS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-data">
          <div className="container">
            <div className="bloc-tabs d-flex justify-content-center ">
              <button className={tableFor === "PH" ? "tabs active-tabs" : "tabs"} onClick={() => setTableForFn("PH")}>
                PHYSICAL COURSES
              </button>
              <button className={tableFor === "ON" ? "tabs active-tabs" : "tabs"} onClick={() => setTableForFn("ON")}>
                ONLINE COURSES
              </button>
              <button className={tableFor === "HI" ? "tabs active-tabs" : "tabs"} onClick={() => setTableForFn("HI")}>
                HIGHER COURSES
              </button>
              <button className={tableFor === "AS" ? "tabs active-tabs" : "tabs"} onClick={() => setTableForFn("AS")}>
                ASHRAM SCHEDULE
              </button>
            </div>

            <div className="content-tabs">
              {courses.length > 0 ? (
                <div className={"content  active-content"}>
                  <PhysicalCourses
                    courses={courses}
                    tableFor={tableFor}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                  />
                </div>
              ) : (
                <div style={{ textAlign: "center", marginTop: "10px" }}>No courses found</div>
              )}

              {/* <div className={tableFor === 2 ? "content  active-content" : "content"}>
                    <PhysicalCourses courses={courses} tableFor={tableFor} />
                  </div> */}

              {/* <div className={tableFor === "HI" ? "content  active-content" : "content"}>
                    <HigherCourses />
                  </div> */}
              {/* <div className={tableFor === "AS" ? "content  active-content" : "content"}>
                    <AshramSchedule />
                  </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Loader>
  );
};
export default FindCourse;

export async function getServerSideProps() {
  try {
    const axiosRes = await axios.get("/course");
    return {
      props: { coursesProp: axiosRes.data.data.courses } // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
    return {
      props: { coursesProp: [] } // will be passed to the page component as props
    };
  }
}
