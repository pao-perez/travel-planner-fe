import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data?.message ?? "Network Error";
    return Promise.reject(new Error(errorMessage));
  }
);

export const fetchCities = async () => {
  const response = await api.get("/cities");
  return response.data;
};

export const fetchCityByName = async (name: string) => {
  const response = await api.get(`/cities/${name}`);
  return response.data;
};
