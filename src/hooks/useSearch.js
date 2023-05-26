import React from 'react';
import APIClient from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

const useSearch = (query) => {
	const apiClient = new APIClient(`/search/multi`);
	return useInfiniteQuery({
		queryKey: [query],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					query,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.page < lastPage.total_pages
				? allPages.length + 1
				: undefined;
		},
		staleTime: ms('24h'),
	});
};

export default useSearch;
