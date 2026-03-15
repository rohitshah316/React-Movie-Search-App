import React from 'react'
import MovieCard from '../components/MovieCard'


const Favourites = ({favourites}) => {
  return (
    <div>
      <h2 className='text-3xl font-bold m-10'>Favourites</h2>
      {favourites.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default Favourites