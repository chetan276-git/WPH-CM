import axios from "axios";

const API_BASE_URL = "http://localhost:6789/api/v1";

const useAxios = () => {
  // create axisos instance
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL
  });

  //  add a request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      //  Do something before request is sent
      return config;
    },
    (error) => {
      //  Do something with request error
      return Promise.reject(error);
    }
  );

  // add interceptor to handle response
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // return the instance
  return axiosInstance;
};

export default useAxios;
