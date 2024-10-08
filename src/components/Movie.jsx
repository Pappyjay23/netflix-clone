import React, { useCallback, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import axios from "axios";
import { key } from "../config/requests";
import { AuthContextUse } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config/firebase";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadImage from "../images/lazy-load-image.jpg";
import TrailerCard from "./TrailerCard";

const Movie = ({ item }) => {
	const [addMovie, setAddMovie] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const [showTrailer, setShowTrailer] = useState(false);
	const { user } = AuthContextUse();
	const navigate = useNavigate();

	const dateReleased = useCallback(() => {
		if (item?.release_date || item?.first_air_date) {
			const date = item?.release_date || item?.first_air_date;
			return date.slice(0, 4);
		}
	}, [item?.release_date, item?.first_air_date]);

	const fetchMovie = useCallback(
		async (id) => {
			try {
				let url;
				if (item?.release_date) {
					url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`;
				} else if (item?.first_air_date) {
					url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`;
				}

				const resp = await axios.get(url);
				let res = resp.data.results;
				const officialTrailer = res.find(
					(video) =>
						video.name === "Official Trailer" || video.name.includes("Official")
				);
				setTrailer(() => officialTrailer ? officialTrailer : res[0]);
			} catch (err) {
				console.log(err);
			}
		},
		[item?.release_date, item?.first_air_date, setTrailer]
	);

	useEffect(() => {
		fetchMovie(item?.id);
	}, [item, fetchMovie]);

	const playTrailer = () => {
		if (user) {
			setShowTrailer(true);
		} else {
			navigate("/signIn");
		}
	};

	const addToList = async () => {
		try {
			setAddMovie(true);
			const movieRef = doc(db, "users", user?.email);
			const checkShowDate = () => {
				if (item?.first_air_date) {
					return item?.first_air_date;
				} else {
					return "";
				}
			};

			const checkMovieDate = () => {
				if (item?.release_date) {
					return item?.release_date;
				} else {
					return "";
				}
			};

			await updateDoc(movieRef, {
				savedShows: arrayUnion({
					id: item?.id,
					title: item?.title || item?.name,
					poster: item?.backdrop_path,
					dateM: checkMovieDate(),
					dateS: checkShowDate(),
				}),
			});
		} catch (e) {
			console.error(e);
		}
	};

	const checkAddMovie = () => {
		if (user) {
			addToList();
		} else {
			navigate("/signIn");
		}
	};

	return (
		<>
			<div className='relative cursor-pointer block h-[200px] w-[120px] lg:h-[300px] lg:w-[200px] flex-shrink-0 scale-[.85] hover:scale-100 duration-500 group/movie overflow-y-hidden'>
				<LazyLoadImage
					width={"100%"}
					effect='blur'
					className='h-full w-full object-cover rounded-lg block group-hover/movie:hidden'
					src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
					placeholderSrc={LoadImage}
					alt='Movie'
				/>
				<img
					src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
					alt='Movie'
					className='h-full w-full object-cover rounded-lg hidden group-hover/movie:block'
				/>
				<div className='absolute top-0 left-0 bg-black/60 w-full h-full hidden group-hover/movie:flex'></div>
				<div className='absolute top-0 left-0 h-full w-full lg:p-4 p-2 opacity-0 group-hover/movie:opacity-100'>
					<div className='flex justify-end'>
						<span onClick={checkAddMovie} className='bg-gray-500/40 p-2 mr-2'>
							{addMovie ? <MdDoneAll /> : <IoMdAdd />}
						</span>
						<span onClick={playTrailer} className='bg-gray-500/40 p-2'>
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
			{showTrailer && trailer && (
				<TrailerCard setShowTrailer={setShowTrailer} trailer={trailer} />
			)}
		</>
	);
};

export default React.memo(Movie);
