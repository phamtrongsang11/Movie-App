import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useUpcoming from '../../../hooks/useUpcoming';

const HeroBanner = () => {
	const [background, setBackground] = useState('');
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const {
		query: { data, isLoading },
		getBackground,
	} = useUpcoming();

	useEffect(() => {
		const bg = getBackground();
		setBackground(bg);
	}, [data]);

	const searchQueryHandler = (event) => {
		if (event.key === 'Enter' && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<div className="heroBanner">
			{!isLoading && (
				<div className="backdrop-img">
					<Img src={background} />
				</div>
			)}
			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className="heroBannerContent">
					<span className="title">Welcome.</span>
					<span className="subTitle">
						Million of movies, TV shows and people to discover. Expolore now.
					</span>
					<div className="searchInput">
						<input
							type="text"
							placeholder="Search for a movie or tv show..."
							onChange={(e) => setQuery(e.target.value)}
							onKeyUp={searchQueryHandler}
						/>
						<button>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default HeroBanner;
