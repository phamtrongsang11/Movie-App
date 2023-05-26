import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from 'react-select';
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import Spinner from '../../components/spinner/Spinner';
import useGenres from '../../hooks/useGenres';
import useDiscover from '../../hooks/useDiscover';
import sort from '../../data/sort';

let filters = {};

const Explore = () => {
	const [genre, setGenre] = useState(null);
	const [sortby, setSortby] = useState(null);
	const { mediaType } = useParams();

	const { data: genresData } = useGenres(mediaType);
	const { data, isLoading, fetchNextPage, hasNextPage } = useDiscover(
		mediaType,
		filters
	);

	const fetchCount =
		data?.pages?.reduce((total, page) => total + page.results.length, 0) || 0;

	useEffect(() => {
		filters = {};
		setSortby(null);
		setGenre(null);
	}, [mediaType]);

	const onChange = (selectedItems, action) => {
		if (action.name === 'sortby') {
			setSortby(selectedItems);
			if (action.action !== 'clear') filters.sort_by = selectedItems.value;
			else delete filters.sort_by;
		}

		if (action.name === 'genres') {
			setGenre(selectedItems);
			if (action.action !== 'clear') {
				let genreId = selectedItems.map((g) => g.id);
				genreId = JSON.stringify(genreId);
				filters.with_genres = genreId;
			} else delete filters.with_genres;
		}
	};

	return (
		<div className="explorePage">
			<ContentWrapper>
				<div className="pageHeader">
					<div className="pageTitle">
						{mediaType === 'tv' ? 'Explore TV Shows' : 'Explore Movies'}
					</div>
					<div className="filters">
						<Select
							isMulti
							name="genres"
							value={genre}
							closeMenuOnSelect={false}
							options={genresData?.genres}
							getOptionLabel={(option) => option.name}
							getOptionValue={(option) => option.id}
							onChange={onChange}
							placeholder="Select genres"
							className="react-select-container genresDD"
							classNamePrefix="react-select"
						/>
						<Select
							name="sortby"
							value={sortby}
							options={sort}
							onChange={onChange}
							isClearable={true}
							placeholder="Sort by"
							className="react-select-container sortbyDD"
							classNamePrefix="react-select"
						/>
					</div>
				</div>
				{isLoading && <Spinner initial={true} />}
				{!isLoading && (
					<>
						{data?.pages.length > 0 ? (
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
												<MovieCard
													key={index}
													data={item}
													mediaType={mediaType}
												/>
											);
										})}
									</React.Fragment>
								))}
							</InfiniteScroll>
						) : (
							<span className="resultNotFound">Sorry, Results not found!</span>
						)}
					</>
				)}
			</ContentWrapper>
		</div>
	);
};

export default Explore;
