import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import { useContext, useEffect,useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular'
import Favourites from './pages/Favourites'
import { getMovies } from './services/tmdbapi'

const App = () => {
 
  const {theme}=useContext(ThemeContext);

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


  const popularMovies=async()=>{
    const data=await getPopularMovies();
    setMovies(data);
  }
  


  return (
    <BrowserRouter>
     <div className={`bg-gray-950 min-h-screen text-white ${theme}`}>
      <NavBar/>
     
    <Routes>
      <Route path='/' element={<Home movies={movies} status={status} error={error} setMovies={setMovies}/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/popular' element={<Popular/>}/>
    </Routes>
     
    </div>
   


    
    </BrowserRouter>
  )
}

export default App