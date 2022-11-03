import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "./pages/MyList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
	return (
		<>
			<AuthContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/myList'
							element={
								<ProtectedRoute>
									<MyList />
								</ProtectedRoute>
							}
						/>
						<Route path='/signIn' element={<SignIn />} />
						<Route path='/signUp' element={<SignUp />} />
					</Routes>
				</Router>
			</AuthContextProvider>
		</>
	);
};

export default App;
