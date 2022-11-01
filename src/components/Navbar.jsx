import React, { useState } from "react";
import Logo from "../images/full-logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<>
			<div className='bg-gray-700 z-[100]'>
				<div className='flex justify-between items-center px-4 md:px-8 py-4 text-white'>
					<img src={Logo} alt='Netflix Logo' className='h-[20px] lg:h-[30px]' />
					<span onClick={handleNav} className='text-[1.5rem] md:hidden'>
						<HiOutlineMenuAlt3 />
					</span>
					<div className='hidden md:flex'>
						<button className='text-xs lg:text-sm mr-4 px-6 py-2 rounded bg-gray-600/40 font-medium'>
							Sign In
						</button>
						<button className='bg-red-700 px-6 py-2 text-xs lg:text-sm font-medium rounded'>
							Sign Up
						</button>
					</div>
				</div>
				<div
					className={`fixed top-0 ${
						nav ? "left-0" : "left-[100%]"
					} duration-300 h-screen w-full overflow-hidden text-white`}>
					<div className='relative'>
						<img
							src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
							alt='Background'
							className='w-full h-screen object-cover'
						/>
						<div className='bg-black/80 left-0 w-full absolute top-0 h-screen'></div>
						<div className='absolute top-0 w-full px-4 py-4'>
							<div className='flex justify-end'>
								<span onClick={handleNav} className='text-[1.5rem]'>
									<FaTimes />
								</span>
							</div>
							<div className='mt-20 flex flex-col items-center'>
								<p className='p-4 font-bold text-[1.3rem] bg-red-700/70 w-[80%] m-auto text-center rounded-lg mb-[2rem]'>Sign In</p>
								<p className='p-4 font-bold text-[1.3rem] bg-red-700/70 w-[80%] m-auto text-center rounded-lg'>Sign Up</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
