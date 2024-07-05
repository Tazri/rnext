import axios from "axios";
import { useEffect } from "react";
import { api } from "../api/index";
import useAuth from "./useAuth";

function useAxios() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // add a request intercepter
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.token;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // add a response intercepter

    const responseIntercept = api.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const res = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { token, refreshToken: newRefreshToken } = res.data;
            console.log("new token : " + token);
            setAuth({ ...auth, token, newRefreshToken });

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axios(originalRequest);
          } catch (err) {
            throw err;
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth.authToken]);

  return api;
}

export { useAxios };
