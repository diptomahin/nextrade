import axios from "axios";

const secureAPI = axios.create({
  baseURL: "https://nex-trade-server.vercel.app/v1/api",
});
const useSecureAPI = () => {
  return secureAPI;
};

export default useSecureAPI;
