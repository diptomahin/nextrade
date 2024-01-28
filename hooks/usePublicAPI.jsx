import axios from "axios";

const publicAPI = axios.create({
  baseURL: "https://nex-trade-server.vercel.app/v1/api",
});
const usePublicAPI = () => {
  return publicAPI;
};

export default usePublicAPI;
