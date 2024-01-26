import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://nex-trade-server.vercel.app/v1/api"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;