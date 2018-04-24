import axios from "axios";

export default function configureInterceptor() {
  const token = localStorage.getItem("token");
  if (token) {
    axios.interceptors.request.use((config) => {
      console.log("First");
      config.headers.Authorization = `Bearer ${localStorage.token}`;
      return config;
    })
  }
}
