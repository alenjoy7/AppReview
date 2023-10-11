import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL
const axiosIntance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosIntance;
