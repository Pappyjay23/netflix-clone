import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AddMovieCard from "../components/AddMovieCard";
import SavedShows from "../components/SavedShows";
import { db } from "../config/firebase";
import { AuthContextUse } from "../context/authContext";

const MyList = () => {
	const { saved, setSaved } = AuthContextUse();
	const { user } = AuthContextUse();

	useEffect(() => {
		const getSaved = () => {
			if (user?.email) {
				onSnapshot(doc(db, "users", user?.email), (doc) => {
					setSaved(doc.data()?.savedShows);
				});
			}
		};
		return () => {
			getSaved();
		};
	}, [user?.email, setSaved]);

	return (
		<div className='h-screen absolute top-0 left-0 w-full text-white bg-black'>
			<LazyLoadImage
				effect='blur'
				width={"100%"}
				className='h-[70vh] xxl:h-[50vh] sl:h-[30vh] w-full object-cover'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/3941ce64-4089-4fbc-b34a-f9faa7209071/NG-en-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='Movie'
			/>
			<div className='bg-black/60 h-[70vh] xxl:h-[50vh] sl:h-[30vh] absolute top-0 left-0 w-full'></div>

			<h1 className='absolute top-[0] h-[70vh] xxl:h-[50vh] sl:h-[30vh] flex justify-center items-center w-full text-center text-[1.5rem] lg:text-[3rem] capitalize'>
				My Movies & Shows
			</h1>
			<div className='p-3 bg-black h-fit'>
				<div className='flex items-center justify-center flex-wrap scroll-smooth'>
					{saved?.length >= 1 ? (
						saved?.map((item, id) => {
							return <SavedShows key={id} item={item} />;
						})
					) : (
						<AddMovieCard />
					)}
				</div>
			</div>
		</div>
	);
};

export default MyList;
