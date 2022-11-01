import axios from "axios";
import React, { useEffect, useState } from "react";
import { movieRequests } from "../config/requests";
import Logo from "../images/logo.png";
import { BsFillPlayFill } from "react-icons/bs";
import  {MdLibraryAdd} from 'react-icons/md'

const HeroSection = () => {
	const [movies, setMovies] = useState([]);
	const movie = movies[Math.floor(Math.random() * movies.length)];
	useEffect(() => {
		axios
			.get(movieRequests.getNowPlayingMovies)
			.then((resp) => {
				setMovies(resp.data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='absolute top-0 left-0 w-full text-white'>
			<div>
				<img
					className='h-[90vh] xxl:h-[70vh] sl:h-[50vh] w-full object-cover'
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt='Movie'
				/>
				<div className='bg-black/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-black h-[90vh] absolute top-0 left-0 w-full'></div>
				<div className="absolute top-[25%] w-full">
                <div className='relative px-4 md:px-8 lg:px-12 lg:max-w-[1200px] mx-auto'>
					<span>
						<img src={Logo} alt='Logo' className='h-[20px]' />
					</span>
					<p className='text-[1.8rem] lg:text-[2.5rem] uppercase w-[70%] font-light lg:leading-[3rem] mb-4 mt-2'>
						{movie?.title}
					</p>
					<div className="flex mb-4">
						<button className='text-xs mr-4 px-6 py-2 rounded bg-gray-100/10 font-medium flex items-center'>
							<span className="mr-1">
								<BsFillPlayFill />
							</span>{" "}
							Play
						</button>
						<button className="text-xs mr-4 px-6 py-2 rounded bg-gray-100/10 font-medium flex items-center">
							<span className="text-white mr-2">
								<MdLibraryAdd />
							</span>{" "}
							My List
						</button>
					</div>
					<p className="text-gray-400 mb-2 text-xs lg:text-base">Released: {movie?.release_date}</p>
					<p className="md:w-[80%] lg:w-[40%] text-xs leading-relaxed">{movie?.overview}</p>
				</div>
                </div>
			</div>
		</div>
	);
};

export default HeroSection;
