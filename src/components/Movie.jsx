import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import axios from "axios";
import { key } from "../config/requests";

const Movie = ({ item }) => {
	const [addMovie, setAddMovie] = useState(false);
	const [trailer, setTrailer] = useState();

	const dateReleased = () => {
		if (item?.release_date || item?.first_air_date) {
			const date = item?.release_date || item?.first_air_date;
			return date.slice(0, 4);
		}
	};

	const getMovie = async (id) => {
		if (item?.release_date) {
			await axios
				.get(
					`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
				)
				.then((resp) => {
					let res = resp.data.results;
					setTrailer(res.find((item) => item.name === "Official Trailer"));
					window.location.href = `https://www.youtube.com/watch?v=${trailer.key}`;
				})
				.catch((err) => console.log(err));
		} else if (item?.first_air_date) {
			await axios
				.get(
					`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`
				)
				.then((resp) => {
					let res = resp.data.results;
					console.log(res)
					setTrailer(
						res.find((item) => item.name.includes("Official"))
					);
					console.log(trailer)
					// window.location.href = `https://www.youtube.com/watch?v=${trailer.key}`;
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className='relative cursor-pointer block h-[200px] w-[120px] lg:h-[300px] lg:w-[200px] flex-shrink-0 scale-[.85] hover:scale-100 duration-500 group/movie'>
			<img
				src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
				alt='Movie'
				className='h-full w-full object-cover rounded-lg block group-hover/movie:hidden'
			/>
			<img
				src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
				alt='Movie'
				className='h-full w-full object-cover rounded-lg hidden group-hover/movie:block'
			/>
			<div className='absolute top-0 left-0 bg-black/60 w-full h-full hidden group-hover/movie:flex'></div>
			<div className='absolute top-0 left-0 h-full w-full lg:p-4 p-2 opacity-0 group-hover/movie:opacity-100'>
				<div onClick={() => getMovie(item?.id)} className='flex justify-end'>
					<span
						onClick={() => setAddMovie(!addMovie)}
						className='bg-gray-500/40 p-2 mr-2'>
						{addMovie ? <MdDoneAll /> : <IoMdAdd />}
					</span>
					<span className='bg-gray-500/40 p-2'>
						<BsFillPlayFill />
					</span>
				</div>
				<div className='flex items-end justify-center h-[80%]'>
					<button className='bg-black/40 text-xs lg:text-sm px-4 py-2 w-full'>
						{item?.title}
						{item?.name}
						{` (${dateReleased()})`}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Movie;
