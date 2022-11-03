import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const AddMovieCard = () => {
	return (
		<Link to='/' className=''>
			<div className='relative cursor-pointer block h-[200px] w-[120px] lg:h-[300px] lg:w-[200px] flex-shrink-0 scale-[.85] hover:scale-95 duration-500 group/movieflex items-center justify-center rounded-[50%]'>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt='Logo'
					className='h-full w-full object-cover  block group-hover/movie:hidden'
				/>
				<div className='absolute top-0 left-0 bg-black/80 w-full h-full group-hover/movie:flex'></div>

				<div className="absolute top-0 w-full h-full flex justify-center items-center">
					<span className='p-2 bg-red-700 text-[1.5rem]'>
						<IoMdAdd />
					</span>
				</div>
			</div>
		</Link>
	);
};

export default AddMovieCard;
