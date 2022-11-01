import React from "react";
import HeroSection from "../components/HeroSection";
import Slider from "../components/Slider";
import { MovieRowData } from "../data/MovieRowData";

const Home = () => {
	return (
		<div className='h-full absolute top-0 left-0 w-full text-white'>
			<HeroSection />
			<div className="bg-black">
				{MovieRowData.map((item, id) => (
					<Slider key={id} title={item.title} url={item.link} />
				))}
			</div>
		</div>
	);
};

export default Home;
