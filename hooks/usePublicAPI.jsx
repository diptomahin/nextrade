import axios from "axios";

const publicAPI = axios.create({
  // baseURL: "https://nex-trade-server.vercel.app/v1/api",
  baseURL: "http://localhost:5000/v1/api",
});
const usePublicAPI = () => {
  return publicAPI;
};

export default usePublicAPI;
