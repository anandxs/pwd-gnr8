import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((req) => {
	const tokens = localStorage.getItem("auth");
	if (tokens) {
		const { auth } = JSON.parse(tokens);
		req.headers.Authorization = `Bearer ${auth}`;
	}
	return req;
});

export { api };
