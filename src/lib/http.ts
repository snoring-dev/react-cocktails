import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

const onSuccess = function (response: AxiosResponse) {
  return response.data;
};

const onError = function (error: any) {
  console.error("Request Failed:", error.config);

  if (error.response) {
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else {
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error.response || error.message);
};

const request = async function (options: AxiosRequestConfig) {
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
