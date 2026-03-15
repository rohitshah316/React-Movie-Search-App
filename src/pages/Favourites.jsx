import React from 'react'
import MovieCard from '../components/MovieCard'
import { useFavouriteContext } from '../context/FavouriteContext'


const Favourites = () => {

  const {favourites}=useFavouriteContext();
  return (
    <>
      <h2 className='text-3xl font-bold m-10'>Favourites</h2>
      {favourites.length===0?(<div className='flex flex-col justify-center items-center text-xl'><p className='font-bold'>No Favourites</p>
      <p className='text-red-400'>Add Your Favourite Movie To See Here.</p></div>):

      (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center'>
          {favourites.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
        </div>
      )}
    </>
  )
}

export default Favourites