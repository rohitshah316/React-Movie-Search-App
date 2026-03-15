import React, { useEffect, useState } from 'react'

import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { searchMovies,getMovies } from '../services/tmdbapi';

const Home = ({movies,status,error,setMovies, favourites,toggleFavourites}) => {

  
  console.log(movies)
const handleSearch=async(query)=>{

    if(!query){
      const data=await getMovies();
      setMovies(data);
      return;
    }
        const data=await searchMovies(query);
        setMovies(data)
  }
  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
{status==="error" && (<div>Error:{error}</div>)}
        {status==="loading" && (<div className='loader'></div>)}




       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
        
        


      {status==="success" && movies.map((movie) => (
       
         <MovieCard movie={movie} favourites={favourites} toggleFavourites={toggleFavourites}/>
       
      ))}
    </div>
    </div>
  )
}

export default Home