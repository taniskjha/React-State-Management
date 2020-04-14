import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

function PostListTest() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            {movies.map(movie => (<li>{movie.Title}</li>))}
        </div>
    )
}

export default PostListTest
