import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { movieRequests } from "../config/requests";
import { AuthContextUse } from "../context/authContext";

const MyList = () => {
  const [movies, setMovies] = useState([]);
	const { user } = AuthContextUse();

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

	return (
		<div className='h-fit absolute top-0 left-0 w-full text-white bg-black'>
			<img
				className='h-[70vh] xxl:h-[50vh] sl:h-[30vh] w-full object-cover'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='Movie'
			/>
			<div className='bg-black/60 h-[70vh] xxl:h-[50vh] sl:h-[30vh] absolute top-0 left-0 w-full'></div>

			<h1 className="absolute top-[0] h-[70vh] xxl:h-[50vh] sl:h-[30vh] flex justify-center items-center w-full text-center text-[1.5rem] lg:text-[3rem] capitalize">My Movies & Shows</h1>
      <div className="p-3">
        <div className='flex items-center justify-center flex-wrap scroll-smooth'>
					{movies.map((item, id) => {
						return <Movie key={id} item={item} close />;
					})}
				</div>
      </div>
		</div>
	);
};

export default MyList;
