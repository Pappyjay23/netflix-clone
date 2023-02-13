import React from "react";
import CTA from "../components/CTA";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import { AuthContextUse } from "../context/authContext";
import { MovieRowData } from "../data/MovieRowData";

const Home = () => {
	const { user } = AuthContextUse();
	return (
		<div className='h-full absolute top-0 left-0 w-full text-white'>
			<HeroSection />
			<div className='bg-black pt-8 relative -top-5'>
				{MovieRowData.map((item, id) => (
					<Slider key={id} title={item.title} url={item.link} />
				))}
				{user ? null : <CTA />}
			</div>
		</div>
	);
};

export default Home;
