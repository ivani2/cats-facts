import axios from "axios";

const catfactsApi = axios.create({
  baseURL: "https://catfact.ninja",
});

export { catfactsApi };
