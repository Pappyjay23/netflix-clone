import axios from "axios";
import React, { useEffect, useState } from "react";
import { key, movieRequests } from "../config/requests";
import Logo from "../images/logo.png";
import { BsFillPlayFill } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextUse } from "../context/authContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = () => {
	const [movies, setMovies] = useState([]);
	const [trailer, setTrailer] = useState();
	const { user } = AuthContextUse();
	const navigate = useNavigate();
	const movie = movies[Math.floor(Math.random() * movies.length)];

	const truncate = (str, no) => {
		if (str?.length > no) {
			return str.slice(0, no) + "....";
		} else {
			return str;
		}
	};

	const getMovies = async () => {
		await axios
			.get(movieRequests.getNowPlayingMovies)
			.then((resp) => {
				setMovies(resp.data.results);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getMovies();
	}, []);

	const getMovie = async (id) => {
		await axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
			)
			.then((resp) => {
				let res = resp.data.results;
				setTrailer(res.find((item) => item.name === "Official Trailer"));
			})
			.catch((err) => console.log(err));
	};

	trailer &&
		(window.location.href = `https://www.youtube.com/watch?v=${trailer?.key}`);

	return (
		<>
			<LazyLoadImage
				width={"100%"}
				effect='blur'
				className='h-[90vh] xxl:h-[70vh] sl:h-[50vh] w-full object-cover'
				src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
				placeholderSrc={`https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20`}
				alt='Movie'
			/>
			<div className='bg-black/80 h-[90vh] xxl:h-[70vh] sl:h-[50vh] absolute top-0 left-0 w-full'></div>
			<div className='absolute top-[18%] lg:top-[25%] xxl:top-[15%] w-full'>
				<div className='relative px-4 md:px-8 lg:px-12 lg:max-w-[1200px] mx-auto'>
					<span>
						<img src={Logo} alt='Logo' className='h-[20px]' />
					</span>
					<p className='text-[1.8rem] lg:text-[2.5rem] uppercase w-[70%] font-light lg:leading-[3rem] mb-4 mt-2'>
						{movie?.title}
					</p>
					<div className='flex mb-4'>
						<button
							onClick={() => (user ? getMovie(movie?.id) : navigate("/signIn"))}
							className='text-xs mr-4 px-6 py-2 rounded bg-gray-100/10 font-medium flex items-center'>
							<span className='mr-1'>
								<BsFillPlayFill />
							</span>
							Play
						</button>
						{user && (
							<Link to={"/myList"}>
								<button className='text-xs mr-4 px-6 py-2 rounded bg-gray-100/10 font-medium flex items-center'>
									<span className='text-white mr-2'>
										<MdLibraryAdd />
									</span>
									My List
								</button>
							</Link>
						)}
					</div>
					<p className='text-gray-400 mb-2 text-xs lg:text-base'>
						Released: {movie?.release_date}
					</p>
					<p className='md:w-[80%] lg:w-[40%] text-xs leading-relaxed'>
						{truncate(movie?.overview, 200)}
					</p>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
