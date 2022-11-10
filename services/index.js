import axios from "axios";

// set base url for axios
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "https://wph-backend.onrender.com/api/v1" : "http://localhost:6789/api/v1";

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  // Do something with response data
  return response.data;
});

export default axios;
