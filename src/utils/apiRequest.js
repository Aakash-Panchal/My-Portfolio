import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://api.aakashpanchal.com/api/",
  withCredentials: true,
});

export default apiRequest;
