import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3005/api"
});

export default api;
