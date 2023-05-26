import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import useTrending from '../../../hooks/useTrending';

const Trending = () => {
	const [time, setTime] = useState('day');
	const { data, isLoading } = useTrending(time);

	const onTabChange = (tab) => {
		setTime(tab === 'Day' ? 'day' : 'week');
	};

	return (
		<div className="carouselSection">
			<ContentWrapper>
				<span className="carouselTitle">Trending</span>
				<SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
			</ContentWrapper>
			<Carousel data={data?.results} loading={isLoading} />
		</div>
	);
};

export default Trending;
