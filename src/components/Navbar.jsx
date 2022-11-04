import React, { useState } from "react";
import Logo from "../images/full-logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextUse } from "../context/authContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { user, logOut } = AuthContextUse();
	const navigate = useNavigate();

	const handleNav = () => {
		setNav(!nav);
	};

	const handleSignOut = async () => {
		await logOut()
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className='absolute top-0 left-0 w-full z-[100]'>
				<div className='flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 text-white lg:max-w-[1200px] mx-auto'>
					<Link to='/'>
						<LazyLoadImage
							effect='blur'
							height={"100%"}
							width={"100%"}
							src={Logo}
							alt='Netflix Logo'
							className='h-[20px] lg:h-[30px]'
						/>
					</Link>
					<span onClick={handleNav} className='text-[1.5rem] md:hidden'>
						<HiOutlineMenuAlt3 />
					</span>
					{user ? (
						<div className='hidden md:flex'>
							<Link to='/myList'>
								<button className='text-xs mr-4 px-6 py-2 rounded bg-gray-600/40 font-medium'>
									My List
								</button>
							</Link>
							<button
								onClick={handleSignOut}
								className='bg-red-700 px-6 py-2 text-xs font-medium rounded'>
								Logout
							</button>
						</div>
					) : (
						<div className='hidden md:flex'>
							<Link to='signIn'>
								<button className='text-xs mr-4 px-6 py-2 rounded bg-gray-600/40 font-medium'>
									Sign In
								</button>
							</Link>
							<Link to='signUp'>
								<button className='bg-red-700 px-6 py-2 text-xs font-medium rounded'>
									Sign Up
								</button>
							</Link>
						</div>
					)}
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
							{user ? (
								<div className='mt-20 flex flex-col items-center w-full'>
									<Link to='/myList' onClick={handleNav}>
										<p className='p-4 font-light text-[1.3rem] w-full m-auto text-center rounded-lg mb-[2rem]'>
											My List
										</p>
									</Link>
									<button onClick={handleSignOut}>
										<p
											onClick={handleNav}
											className='p-4 font-light text-[1.3rem] w-full m-auto text-center rounded-lg'>
											Logout
										</p>
									</button>
								</div>
							) : (
								<div className='mt-20 flex flex-col items-center w-full'>
									<Link to='/signIn' onClick={handleNav}>
										<p className='p-4 font-light text-[1.3rem] w-full m-auto text-center rounded-lg mb-[2rem]'>
											Sign In
										</p>
									</Link>
									<Link to='/signUp' onClick={handleNav}>
										<p className='p-4 font-light text-[1.3rem] w-full m-auto text-center rounded-lg'>
											Sign Up
										</p>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
