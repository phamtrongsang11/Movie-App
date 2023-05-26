import axios from 'axios';

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
	Authorization: 'bearer ' + TMDB_TOKEN,
};

export const axiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers,
});

class APIClient {
	constructor(endpoint) {
		this.endpoint = endpoint;
	}

	getAll = (config) => {
		return axiosInstance.get(this.endpoint, config).then((res) => res.data);
	};

	get = (id) => {
		return axiosInstance
			.get(`${this.endpoint} / ${id}`)
			.then((res) => res.data);
	};

	create = (data) => {
		return axiosInstance.post(this.endpoint, data);
	};

	update = (data) => {
		return axiosInstance.put(`${this.endpoint}/${data.id}`, data);
	};

	delete = (id) => {
		return axiosInstance.delete(`${this.endpoint}/${id}`);
	};
}

export default APIClient;
