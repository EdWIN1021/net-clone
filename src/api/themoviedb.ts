import axios from "axios";

export const themoviedb = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});
