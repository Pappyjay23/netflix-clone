import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Slider = ({ title, url }) => {
	const [movies, setMovies] = useState([]);
    const sliderRef = useRef(null)

    const slideLeft = () =>{
        return sliderRef.current.scrollLeft -= 500
    }
    const slideRight = () =>{
        return sliderRef.current.scrollLeft += 500
    }

	useEffect(() => {
		axios.get(url).then((resp) => {
			setMovies(resp.data.results);
		});
	}, [url]);

	return (
		<div className='text-white mb-4 lg:mb-8'>
			<p className='px-4 pt-4 uppercase text-xl'>{title}</p>
			<div className='flex items-center group/slider relative'>
				<span onClick={slideLeft} className='absolute bg-red-700/60 hover:bg-red-700 p-2 rounded-full text-white left-2 z-50 cursor-pointer hidden group-hover/slider:flex'>
					<AiOutlineDoubleLeft />
				</span>
				<div ref={sliderRef} className='flex items-center overflow-x-scroll scrollbar-hide scroll-smooth'>
					{movies.map((item, id) => {
						return <Movie key={id} item={item} />;
					})}
				</div>
				<span onClick={slideRight} className='absolute bg-red-700/60 hover:bg-red-700 p-2 rounded-full text-white right-2 z-50 cursor-pointer hidden group-hover/slider:flex'>
					<AiOutlineDoubleRight />
				</span>
			</div>
		</div>
	);
};

export default Slider;
