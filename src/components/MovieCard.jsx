import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useFavouriteContext } from '../context/FavouriteContext';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    
  const {addToFavourite,removeFavourites,isFavourite}=useFavouriteContext();
  const favourite=isFavourite(movie.id);

  const onFavouriteClick=(e)=>{
      e.preventDefault();
      if(favourite){
removeFavourites(movie.id)
      } 
        else{ addToFavourite(movie)}
  }
  return (
    <Link to={`/movie/${movie.id}`}>
    
    <div className='bg-cyan-400 m-5 p-5 rounded-2xl w-50 flex flex-col text-pink-800 transform hover:scale-105 cursor-pointer'>

      <button onClick={onFavouriteClick} className='self-end m-1 text-xl cursor-pointer'>
         {favourite? <IoMdHeart />:<CiHeart className=' text-pink-900 hover:text-pink-700' title='Add To Favourites'/>
}
      </button>
    
       
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='rounded-xl bg-cover '/>
          <h3 key={movie.id} className='text-xl font-bold text-black'>{movie.title}</h3>
          <p className='text-[14px]'>{movie.release_date}</p>

    </div>
    </Link>
  )
}

export default MovieCard