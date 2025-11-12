import axios from "axios";

// automatically choose the correct backend
const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080/api"
    : "https://foodify-server-9iun.onrender.com/api";

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies
});

// signup
export const signup = (data) => API.post("/auth/signup", data);

// login
export const login = (data) => API.post("/auth/login", data);

// logged in user
export const getUser = () => API.get("/auth/me");

// logout
export const logout = () => API.post("/auth/logout");
