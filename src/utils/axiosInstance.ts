import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://admin.peacezoneacademy.com/api/"

})
export default axiosInstance;