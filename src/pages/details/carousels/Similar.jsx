import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import useMediaType from '../../../hooks/useMediaType';

const Similar = ({ mediaType, id }) => {
	const { data, isLoading } = useMediaType(mediaType, id, 'similar');
	const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';
	return (
		<>
			{!isLoading && (
				<>
					{data?.results.length > 0 && (
						<Carousel
							title={title}
							data={data?.results}
							loading={isLoading}
							endpoint={mediaType}
						/>
					)}
				</>
			)}
		</>
	);
};

export default Similar;
