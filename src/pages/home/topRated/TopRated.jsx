import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useMediaTypes from '../../../hooks/useMediaTypes';

const TopRated = () => {
	const [mediaType, setMediaType] = useState('movie');
	const { data, isLoading } = useMediaTypes(mediaType, 'top_rated');
	const onTabChange = (tab) => {
		setMediaType(tab === 'Movies' ? 'movie' : 'tv');
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Top Rated</span>
				<SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={isLoading} endpoint={mediaType} />
		</div>
	);
};

export default TopRated;
