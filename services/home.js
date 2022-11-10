import axios from "./";

export const getHomeBanner = async () => {
  const response = await axios.get(`/banner?page=Home`);
  return response;
};
