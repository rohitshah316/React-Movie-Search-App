import React, { useEffect, useState } from 'react'
import { getMovies } from '../services/tmdbapi'
import MovieCard from '../components/MovieCard';

const Home = () => {

  const [movies,setMovies]=useState([]);
  const [status,setStatus]=useState("idle");
  const [error,setError]=useState(null);

  useEffect(()=>{

    const fetchMovies=async()=>{

      setStatus("loading");
      setError(null);
        try{
 const data=await getMovies();
      setMovies(data);
        }catch(err){
            setStatus("error");
            setError(err.message);
        }finally{
          setStatus("success");
        }
     
    }
    fetchMovies()
  },[])

  console.log(movies)

  return (
    <div>
{status==="error" && (<div>Error:{error}</div>)}
        {status==="loading" && (<div className='loader'></div>)}




       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center'>
        
        


      {status==="success" && movies.map((movie) => (
       
         <MovieCard movie={movie}/>
       
      ))}
    </div>
    </div>
  )
}

export default Home