import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import Movie from "./Movie";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const Slider = ({ title, url }) => {
	const [movies, setMovies] = useState([]);
	const sliderRef = useRef(null);
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const slideLeft = useCallback(() => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= 500;
		}
	}, []);

	const slideRight = useCallback(() => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += 500;
		}
	}, []);

	useEffect(() => {
		if (inView) {
			const fetchMovies = async () => {
				try {
					const resp = await axios.get(url);
					setMovies(resp.data.results);
				} catch (error) {
					console.error("Error fetching movies:", error);
				}
			};
			fetchMovies();
		}
	}, [url, inView]);

	return (
		<div ref={ref} className='text-white mb-4 lg:mb-8'>
			<p className='px-4 pt-4 uppercase text-xl'>{title}</p>
			<div className='flex items-center group/slider relative'>
				<span
					onClick={slideLeft}
					className='absolute bg-red-700/60 hover:bg-red-700 p-2 rounded-full text-white left-2 z-50 cursor-pointer hidden group-hover/slider:flex'>
					<AiOutlineDoubleLeft />
				</span>
				<div
					ref={sliderRef}
					className='flex items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
					{movies.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>
				<span
					onClick={slideRight}
					className='absolute bg-red-700/60 hover:bg-red-700 p-2 rounded-full text-white right-2 z-50 cursor-pointer hidden group-hover/slider:flex'>
					<AiOutlineDoubleRight />
				</span>
			</div>
		</div>
	);
};

export default React.memo(Slider);
