// Step 1 : Import useState

import React, { useState } from 'react'

// Step 2 - create context export it
export const MovieContext = React.createContext();

// Step 3 - Create a movie provider function
export const MovieProvider = (props) => {

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