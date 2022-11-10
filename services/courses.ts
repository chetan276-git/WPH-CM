import axios from "./";

export const getCourses = async ({ page, tableFor }) => {
  const response = await axios.get(`/course?page=${page}&course_type=${tableFor}`);
  return response;
};
export const getAllCourses = async () => {
  const response = await axios.get(`/courses`);
  return response;
};
