// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.openai.com/v1/",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
	},
});

export default axiosInstance;
