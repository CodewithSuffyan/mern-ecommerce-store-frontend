import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://mern-ecommerce-store-backend.vercel.app/",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;