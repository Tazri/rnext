import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

const token = "kdjsafljmceionda;lkdj";

// request interceptors
api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    if (err.response) {
      // error come from server
      err.message = `Error from server: status : ${err.response.status} - Message : ${err.response.statusText}`;
    }

    return Promise.reject(err);
  }
);

export default api;
