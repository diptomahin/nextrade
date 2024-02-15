import axios from "axios";

const secureAPI = axios.create({
  // baseURL: "http://localhost:5000/v1/api",
  baseURL: "https://nex-trade-server.vercel.app/v1/api",
});
const useSecureAPI = () => {
  return secureAPI;
};

export default useSecureAPI;
