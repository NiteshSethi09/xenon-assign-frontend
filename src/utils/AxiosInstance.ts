import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://xenon-assign-backend.herokuapp.com/",
});

export default axiosInstance;
