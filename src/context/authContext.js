import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [movie, setMovie] = useState({});

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		return signOut(auth);
	};


	
	useEffect(() => {
		const getUser = onAuthStateChanged(auth, (resp) => {
			setUser(resp);
		});
		return () => {
			getUser();
		};
	});
	const values = { user, signUp, logIn, logOut, movie, setMovie };
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const AuthContextUse = () => {
	return useContext(AuthContext);
};
