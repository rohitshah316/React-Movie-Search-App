import React, { useState } from 'react'
import { getPopularMovies } from '../services/tmdbapi';
import MovieCard from '../components/MovieCard';
const Popular = () => {

  const [movies,setMovies]=useState([])
  const popularMovies=async()=>{
    const data=await getPopularMovies();
    setMovies(data);
  }

  popularMovies()
  return (
    <>
    <h2 className='text-3xl font-bold m-10'>Popular Movies</h2>
    <div  className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
      
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
    </div>
    </>
  )
}

export default Popular