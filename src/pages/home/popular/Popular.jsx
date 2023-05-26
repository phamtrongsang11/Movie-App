import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useMediaTypes from '../../../hooks/useMediaTypes';

const Popular = () => {
	const [mediaType, setMediaType] = useState('movie');
	// const { data, loading } = useFetch(`/${endpoint}/popular`);
	const { data, isLoading } = useMediaTypes(mediaType, 'popular');
	const onTabChange = (tab) => {
		setMediaType(tab === 'Movies' ? 'movie' : 'tv');
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">What's Popular</span>
				<SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={isLoading} endpoint={mediaType} />
		</div>
	);
};

export default Popular;
