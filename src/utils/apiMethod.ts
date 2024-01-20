import axios, { AxiosRequestConfig, AxiosInstance, Method } from "axios";

let axiosInstance: AxiosInstance;

export const APIMethod = async (
  method: Method,
  url: string,
  data?: any,
  contentType = "application/json",
  responseType?: AxiosRequestConfig["responseType"]
) => {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: "https://job-portal-backend-yct8.onrender.com/api/v1",
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return axiosInstance({
    method: method,
    url: url,
    data: data,
    responseType,
    headers: {
      "content-type": contentType,
    },
  });
};
