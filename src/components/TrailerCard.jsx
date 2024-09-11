import React from "react";

const TrailerCard = ({setShowTrailer, trailer}) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-[150]'>
			<div className='relative w-[90%] max-w-[800px]'>
				<button
					className='absolute top-[-60px] right-0 text-white text-[3.5rem]'
					onClick={() => setShowTrailer(false)}>
					×
				</button>
				<iframe
					width='100%'
					height='450'
					src={`https://www.youtube.com/embed/${trailer.key}`}
					frameBorder='0'
					allow='autoplay; encrypted-media'
					allowFullScreen
					title='Movie Trailer'
				/>
			</div>
		</div>
	);
};

export default TrailerCard;
