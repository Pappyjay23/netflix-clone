import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";

const Movie = ({ item }) => {
	const [addMovie, setAddMovie] = useState(false);
    const dateReleased = () =>{
        if(item?.release_date || item?.first_air_date){
            const date = item?.release_date || item?.first_air_date
            return date.slice(0, 4)
        }
    }
	return (
		<div className='relative cursor-pointer block h-[300px] w-[200px] flex-shrink-0 scale-[.85] hover:scale-100 duration-500 group'>
			<img
				src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
				alt='Movie'
				className='h-full w-full object-cover rounded-lg block'
			/>
			<div className='absolute top-0 left-0 bg-black/60 w-full h-full hidden group-hover:flex'></div>
			<div className='absolute top-0 left-0 h-full w-full p-4'>
				<div className='flex justify-end'>
					<span onClick={() => setAddMovie(!addMovie)} className='bg-gray-500/40 p-2'>
						{addMovie ? <MdDoneAll /> : <IoMdAdd />}
					</span>
				</div>
				<div className='flex items-end justify-center h-[80%]'>
					<button className='bg-black/40 text-sm px-4 py-2 w-full'>
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
