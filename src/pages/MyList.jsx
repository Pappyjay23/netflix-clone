import React from "react";

const MyList = () => {
	return (
		<div className='h-full absolute top-0 left-0 w-full text-white bg-black'>
			<img
				className='h-[70vh] xxl:h-[50vh] sl:h-[30vh] w-full object-cover'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='Movie'
			/>
			<div className='bg-black/60 h-[70vh] xxl:h-[50vh] sl:h-[30vh] absolute top-0 left-0 w-full'></div>

			<h1 className="absolute top-[0] h-[70vh] xxl:h-[50vh] sl:h-[30vh] flex justify-center items-center w-full text-center text-[1.5rem] lg:text-[3rem] capitalize">My Movies & Shows</h1>
		</div>
	);
};

export default MyList;
