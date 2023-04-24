import axios from "axios";

export function createAxiosInstance() {
	const instance = axios.create({
		// @ts-ignore
		baseURL: import.meta.env.VITE_API_URL,
		timeout: 10000,
		headers: {
			"Content-Type": "application/json",
		},
	});

	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			console.error(error);
			return Promise.reject(error);
		},
	);

	return instance;
}
