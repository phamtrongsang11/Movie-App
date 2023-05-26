import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';

const useMediaTypes = (mediaType, type) => {
	const apiClient = new APIClient(`/${mediaType}/${type}`);

	return useQuery({
		queryKey: [type, mediaType],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});
};

export default useMediaTypes;
