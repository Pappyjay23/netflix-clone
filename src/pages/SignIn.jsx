import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/full-logo.png";

const SignIn = () => {
	return (
		<div className='absolute top-0 left-0 w-full'>
			<img
				src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='/'
				className='h-full w-full object-cover'
			/>
			<div className='bg-black/70 left-0 w-full absolute top-0 h-full'></div>
			<div className='flex justify-center absolute left-0 top-[20%] z-50 w-full text-white'>
				<div className='bg-black/70 w-[35%] py-[4rem]'>
					<div className='w-[80%] mx-auto'>
						<div className="flex justify-center mb-8">
							<img src={Logo} alt='Logo' className='h-[40px]' />
						</div>
						<p className='mb-8 text-3xl font-bold text-center'>Sign In</p>
						<form className='flex flex-col'>
							<input
								className='mb-4 px-2 py-3 rounded bg-gray-700 outline-none'
								type='email'
								placeholder='Email'
							/>
							<input
								className='mb-4 px-2 py-3 rounded bg-gray-700 outline-none'
								type='password'
								placeholder='Password'
							/>
							<button
								type='submit'
								className='bg-red-700 px-6 py-3 font-medium rounded'>
								Sign In
							</button>
						</form>
						<div className='mt-8 flex justify-between'>
							<div className='flex items-center'>
								<input type='checkbox' name='' id='' />
								<span className='text-xs text-gray-500 ml-2'>Remember me</span>
							</div>
							<p className='text-xs text-gray-500'>Need Help?</p>
						</div>
						<div className='flex text-sm mt-8'>
							<span className='text-gray-500'>New to Netflix?</span>
							<Link to='/signUp'>
								<p className='ml-2'>Sign Up</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
