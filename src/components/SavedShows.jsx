import axios from "axios";
import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { db } from "../config/firebase";
import { key } from "../config/requests";
import { AuthContextUse } from "../context/authContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TrailerCard from "./TrailerCard";

const SavedShows = ({ item }) => {
	const [trailer, setTrailer] = useState(null);
	const [showTrailer, setShowTrailer] = useState(false);
	const { user, saved } = AuthContextUse();

	useEffect(() => {
		const fetchMovie = async (id) => {
			try {
				let url;
				if (item?.dateM) {
					url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`;
				} else if (item?.dateS) {
					url = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`;
				}
				const resp = await axios.get(url);
				let res = resp.data.results;
				const officialTrailer = res.find(
					(item) =>
						item.name === "Official Trailer" || item.name.includes("Official")
				);
				setTrailer(officialTrailer);
			} catch (err) {
				console.log(err);
			}
		};
		fetchMovie(item?.id);
	}, [item]);

	const playTrailer = () => {
		setShowTrailer(true);
	};

	const dateReleased = () => {
		if (item?.dateM || item?.dateS) {
			const date = item?.dateM || item?.dateS;
			return date.slice(0, 4);
		}
	};

	const deleteShow = async (id) => {
		const filteredRes = saved.filter((sav) => id !== sav.id);
		const ref = doc(db, "users", user?.email);
		await updateDoc(ref, {
			savedShows: filteredRes,
		}).catch((err) => console.log(err));
	};

	return (
		<>
			<div className='relative cursor-pointer block h-[200px] w-[120px] lg:h-[300px] lg:w-[200px] flex-shrink-0 scale-[.85] hover:scale-100 duration-500 group/movie'>
				<LazyLoadImage
					effect='blur'
					height={"100%"}
					width={"100%"}
					src={`https://image.tmdb.org/t/p/original/${item?.poster}`}
					alt='Movie'
					className='h-full w-full object-cover rounded-lg block'
				/>
				<div className='absolute top-0 left-0 bg-black/60 w-full h-full hidden group-hover/movie:flex'></div>
				<div className='absolute top-0 left-0 h-full w-full lg:p-4 p-2 opacity-0 group-hover/movie:opacity-100'>
					<div className='flex justify-end'>
						<span
							onClick={() => deleteShow(item?.id)}
							className='bg-gray-500/40 p-2 mr-2'>
							<IoMdClose />
						</span>

						<span onClick={playTrailer} className='bg-gray-500/40 p-2'>
							<BsFillPlayFill />
						</span>
					</div>
					<div className='flex items-end justify-center h-[80%]'>
						<button className='bg-black/40 text-xs lg:text-sm px-4 py-2 w-full'>
							{item?.title}
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

export default SavedShows;
