import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MovieContextProvider } from "./context/movieContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from './pages/MyList'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
	return (
		<>
			<MovieContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/myList' element={<MyList />} />
						<Route path='/signIn' element={<SignIn />} />
						<Route path='/signUp' element={<SignUp />} />
					</Routes>
				</Router>
			</MovieContextProvider>
		</>
	);
};

export default App;
