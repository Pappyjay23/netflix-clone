import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Slider = ({ title, url }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(url).then((resp) => {
			setMovies(resp.data.results);
		});
	}, [url]);

	return (
		<div className='text-white mb-8'>
			<p className='px-4 pt-4 uppercase text-xl'>{title}</p>
			<div className='flex'>
				{/* <span>+</span> */}
				<div className='flex items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
					{movies.map((item, id) => {
						return <Movie key={id} item={item} />;
					})}
				</div>
				{/* <span>+</span> */}
			</div>
		</div>
	);
};

export default Slider;
