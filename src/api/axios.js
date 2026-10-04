import axios from "axios";

// Create custom instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // Matches your Go Fiber port
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
