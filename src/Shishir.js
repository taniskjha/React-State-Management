import React, { useContext } from 'react'

import { MovieContext } from './MovieContext'

function Shishir() {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {movies.map(movie => (<li>{movie.Id}</li>))}
        </div>
    )

}

export default Shishir