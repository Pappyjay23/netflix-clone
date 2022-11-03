import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "./pages/MyList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/authContext";

const App = () => {
	return (
		<>
			<AuthContextProvider>
				{/* <MovieContextProvider> */}
					<Router>
						<Navbar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/myList' element={<MyList />} />
							<Route path='/signIn' element={<SignIn />} />
							<Route path='/signUp' element={<SignUp />} />
						</Routes>
					</Router>
				{/* </MovieContextProvider> */}
			</AuthContextProvider>
		</>
	);
};

export default App;
