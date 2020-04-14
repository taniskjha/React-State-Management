import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext'

function PostList() {
    const [movies, setMovies] = useContext(MovieContext)
    console.log(movies)
    return (
        <div>
            {movies.map(movie => (
                <li>{movie.Title}</li>
            ))}
        </div>
    )
}

export default PostList

