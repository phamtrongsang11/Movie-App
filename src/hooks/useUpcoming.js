import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const apiClient = new APIClient(`/movie/upcoming`);

const useUpcoming = () => {
	const { url } = useSelector((state) => state.home);
	const query = useQuery({
		queryKey: ['upcomming'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});

	const getBackground = () => {
		return (
			url.backdrop +
			query.data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
		);
	};

	return { query, getBackground };
};

export default useUpcoming;
