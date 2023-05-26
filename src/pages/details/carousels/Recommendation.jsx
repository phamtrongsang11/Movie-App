import React from 'react';
import Carousel from '../../../components/carousel/Carousel';
import useMediaType from '../../../hooks/useMediaType';

const Recommendation = ({ mediaType, id }) => {
	const { data, isLoading } = useMediaType(mediaType, id, 'recommendations');
	return (
		<>
			{!isLoading && (
				<>
					{data?.results.length > 0 && (
						<Carousel
							title="Recommendations"
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

export default Recommendation;
