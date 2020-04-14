// import useState and create Context from react
import React, { useState, createContext } from 'react'

// Export created context
export const MovieContext = createContext();


export const MovieProvider = (props) => {

    // Line 11 to 27 is providing data 
    const [movies, setMovies] = useState([{
        Id: 1,
        Title: "The game of thrones",
        Completed: false
    },
    {
        Id: 2,
        Title: "The Bahubali",
        Completed: false
    },
    {
        Id: 3,
        Title: "The Extra Powerful Bahubali",
        Completed: false
    }

    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}


