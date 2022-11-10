import axios from "./";

export const getTestimonials = async (page) => {
  const response = await axios.get(`/testimonial?page=${page}`);
  return response;
};
