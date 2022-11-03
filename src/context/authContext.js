import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [movie, setMovie] = useState({});
	const [saved, setSaved] = useState([]);

	const signUp = async (email, password) => {
		const movieRef = doc(db, "users", email);
		await setDoc(movieRef, {
			savedShows: [],
		});
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
	const values = {
		user,
		signUp,
		logIn,
		logOut,
		movie,
		setMovie,
		saved,
		setSaved,
	};
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const AuthContextUse = () => {
	return useContext(AuthContext);
};
