import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import useAuth from "./useAuth";

export default function useAxios() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // Add a request intercepter
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
          return config;
        }
      },
      (error) => Promise.reject(error)
    );

    // Add a response intercepter
    const responseIntercept = api.interceptors.response.use(
      (res) => res,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          // eslint-disable-next-line no-useless-catch
          try {
            const refreshToken = auth?.refreshToken;

            const baseUrl = `${
              import.meta.env.VITE_SERVER_BASE_URL
            }/auth/refresh-token`;

            const res = await axios.post(baseUrl, {
              refreshToken,
            });

            const { token } = res.data;
            setAuth({ ...auth, refreshToken, authToken: token });

            console.log(`New token : ${token}`);

            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          } catch (e) {
            throw e;
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth, setAuth]);

  return { api };
}
