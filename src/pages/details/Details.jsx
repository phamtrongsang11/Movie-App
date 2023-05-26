import React from 'react';
import './style.scss';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';
import Spinner from '../../components/spinner/Spinner';
import useMediaType from '../../hooks/useMediaType';

const Details = () => {
	const { mediaType, id } = useParams();
	const { data, isLoading } = useMediaType(mediaType, id, 'videos');
	const { data: credits, isLoading: creditsLoading } = useMediaType(
		mediaType,
		id,
		'credits'
	);

	return (
		<>
			{isLoading && <Spinner initial={true} />}
			{!isLoading && (
				<div style={{ minHeight: '100vh' }}>
					<DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
					<Cast data={credits?.cast} loading={creditsLoading} />
					<VideosSection data={data} loading={isLoading} />
					<Similar mediaType={mediaType} id={id} />
					<Recommendation mediaType={mediaType} id={id} />
				</div>
			)}
		</>
	);
};

export default Details;
