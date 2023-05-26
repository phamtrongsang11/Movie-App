import React from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import useSearch from '../../hooks/useSearch';
import './style.scss';

const SearchResult = () => {
	const { query } = useParams();
	const { data, isLoading, fetchNextPage, hasNextPage } = useSearch(query);

	const fetchCount =
		data?.pages?.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<div className="searchResultsPage">
			{isLoading && <Spinner initial={true} />}
			{!isLoading && (
				<ContentWrapper>
					{data?.pages?.length > 0 ? (
						<>
							<div className="pageTitle">
								{`Search ${
									data.total_results > 1 ? 'results' : 'result'
								} of ${query}`}
							</div>
							<InfiniteScroll
								className="content"
								dataLength={fetchCount}
								hasMore={!!hasNextPage}
								next={() => fetchNextPage()}
								loader={<Spinner />}
							>
								{data?.pages.map((page, index) => (
									<React.Fragment key={index}>
										{page?.results?.map((item, index) => {
											if (item.media_type === 'person') return;
											return (
												<MovieCard key={index} data={item} fromSearch={true} />
											);
										})}
									</React.Fragment>
								))}
							</InfiniteScroll>
						</>
					) : (
						<span className="resultNotFound">Sorry, Results not found</span>
					)}
				</ContentWrapper>
			)}
		</div>
	);
};

export default SearchResult;
