import React from 'react';
import APIClient from '../services/api-client';
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';

const useDiscover = (mediaType, filter) => {
	const apiClient = new APIClient(`/discover/${mediaType}`);
	return useInfiniteQuery({
		queryKey: [mediaType, filter],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					sort_by: filter.sort_by,
					with_genres: filter.with_genres?.substring(
						1,
						filter.with_genres.length - 1
					),
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

export default useDiscover;
