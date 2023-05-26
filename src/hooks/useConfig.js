import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../services/api-client';
import { getApiConfiguration, getGenres } from '../store/homeSlice';
import { useEffect } from 'react';
import useGenres from './useGenres';

const useConfig = () => {
	const dispatch = useDispatch();

	const fetchApiConfig = () => {
		axiosInstance.get('/configuration').then((res) => {
			const url = {
				backdrop: res.data.images.secure_base_url + 'w1280',
				poster: res.data.images.secure_base_url + 'w500',
				profile: res.data.images.secure_base_url + 'w185',
			};
			dispatch(getApiConfiguration(url));
		});
	};
	const genresCall = async () => {
		let promises = [];
		let endPoints = ['tv', 'movie'];
		let allGenres = {};
		endPoints.forEach((url) => {
			promises.push(axiosInstance.get(`/genre/${url}/list`));
		});

		const results = await Promise.all(promises);

		results.map(({ data }) => {
			return data.genres.map((item) => {
				allGenres[item.id] = item;
			});
		});
		dispatch(getGenres(allGenres));
	};
	useEffect(() => {
		fetchApiConfig();
		genresCall();
	}, []);
};

export default useConfig;
