import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
	return (
		<div className='relative h-full w-full'>
			<img
				src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='Background'
				className='absolute top-3 left-0 w-full h-[90%] object-cover blur-sm'
			/>
			<div className='absolute top-0 left-0 w-full h-full bg-black/80'></div>
			<div className='relative top-0 py-8 px-8 flex flex-col justify-center items-center text-center lg:w-[60%] mx-auto z-[50]'>
				<p className='text-[2rem] leading-8 lg:mb-2 mb-6'>
					There's even more to watch.
				</p>
				<p className='mb-6 text-sm lg:text-base'>
					Netflix has an extensive library of feature films, documentaries, TV
					shows, anime, award-winning Netflix originals, and more. Watch as much
					as you want, anytime you want.
				</p>
				<Link to='signUp'>
					<button className='bg-red-700 px-6 py-2 lg:text-[1.3rem] font-medium rounded'>
						Sign Up
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CTA;
