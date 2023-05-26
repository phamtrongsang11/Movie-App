import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';

const useMediaType = (mediaType, id, type) => {
	const apiClient = type
		? new APIClient(`/${mediaType}/${id}/${type}`)
		: new APIClient(`/${mediaType}/${id}`);

	return useQuery({
		queryKey: [type, mediaType, id],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'),
	});
};

export default useMediaType;
