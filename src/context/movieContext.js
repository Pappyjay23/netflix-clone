import {useContext, createContext, useState} from 'react'

const MovieContext = createContext()

export const MovieContextProvider = ({children}) =>{
    const [movie, setMovie] = useState({});
    const values={setMovie, movie}
    return(
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

export const MovieContexts = () =>{
    return useContext(MovieContext)
}