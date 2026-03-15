import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const MovieCard = ({movie}) => {
    const [favourite,setFavourite]=useState(false);
    const [favouriteList,setFavouriteList]=useState([]);
    const addToFavorite=(movie)=>{
        setFavourite(!favourite);
        setFavouriteList([...favouriteList,favouriteList]);
    }
  return (
    <div className='bg-cyan-400 m-5 p-5 rounded-2xl w-50 flex flex-col text-pink-800 transform hover:scale-105 cursor-pointer'>

      <button onClick={addToFavorite} className='self-end m-1 text-xl cursor-pointer'>
         {favourite===false ? <CiHeart className=' text-pink-900 hover:text-pink-700' title='Add To Favourites'/>:<IoMdHeart />
}
      </button>
    
       
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='rounded-xl bg-cover '/>
          <h3 key={movie.id} className='text-xl font-bold text-black'>{movie.title}</h3>
          <p className='text-[14px]'>{movie.release_date}</p>

    </div>
  )
}

export default MovieCard