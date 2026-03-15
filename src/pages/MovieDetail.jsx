import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getMovieById } from '../services/tmdbapi';
import { Link } from 'react-router-dom';

const MovieDetail = () => {

    const {id}=useParams();
    const [movie,setMovie]=useState(null);

    useEffect(()=>{
       const fetchMovie=async()=>{
        const data=await getMovieById(id);
        setMovie(data);
       }
       fetchMovie()
    },[id])

     if (!movie) return <p>Loading...</p>;



     let ratingColor="";

     if(movie.vote_average>7){
        ratingColor=("bg-green-500");
     }else if(movie.vote_average>5){
        ratingColor=("bg-yellow-500");
     }else{
        ratingColor=("bg-red-500")
     }
     

  return (
    <>
    
    <div className='bg-blue-200 m-10 rounded-2xl p-5 text-black md:flex justify-center items-center'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-60 m-auto mb-10 rounded-xl' />
        <div className='flex flex-col flex-1 p-5 bg-blue-300 md:m-5 rounded-xl'>
            <h1 className='font-bold text-4xl'>{movie.title}</h1>
      
      <p className='text-xl'>{movie.overview}</p>
      <p>Popularity: <span className='bg-green-500 px-2 py-1 rounded '>{movie.popularity}</span> </p>
      <p >Release Date: <span className='text-red-800'>{movie.release_date}</span></p>
      <p className='text-xl mt-4'>Rating <span className={`${ratingColor} p-2 rounded text-green-950`}>{movie.vote_average}</span> </p>
        </div>
    </div>

    <Link to='/' className='bg-blue-500 px-5 py-3 m-10 rounded-2xl'>Go Back 
</Link>
    </>
  )
}

export default MovieDetail