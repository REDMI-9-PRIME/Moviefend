import axios from "axios";

const api = axios.create({
  baseURL: "https://moviebend.onrender.com"
});

export default api;