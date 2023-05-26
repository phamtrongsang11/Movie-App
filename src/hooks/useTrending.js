import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';

const useTrending = (time) => {
	const apiClient = new APIClient(`/trending/movie/${time}`);
	return useQuery({
		queryKey: ['movies', time],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});
};

export default useTrending;
