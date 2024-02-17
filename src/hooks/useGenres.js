import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';

const useGenres = (mediaType) => {
	const apiClient = new APIClient(`/genre/${mediaType}/list`);
	return useQuery({
		queryKey: ['genre', mediaType],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});
};

export default useGenres;
