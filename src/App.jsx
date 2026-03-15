
import NavBar from './components/NavBar'
import { useContext, useEffect,useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular'
import Favourites from './pages/Favourites'
import { getMovies } from './services/tmdbapi'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import { FavouriteProvider } from './context/FavouriteContext'
import MovieDetail from './pages/MovieDetail'

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
      setStatus("success");
        }catch(err){
            setStatus("error");
            setError(err.message);
        }
    }
    fetchMovies()
  },[])





  return (
    <FavouriteProvider>

    <BrowserRouter>
     <div className={`bg-gray-950 min-h-screen text-white ${theme} flex flex-col`}>
      <NavBar/>
     

     <div className='flex-1'>

    <Routes>
      <Route path='/' element={<Home movies={movies} status={status} error={error} setMovies={setMovies} />}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/*' element={<NotFound/>}/>
      <Route path='/movie/:id' element={<MovieDetail/>}/>

      
    </Routes>
     </div>
     
     <Footer/>
    </div>
   


    
    </BrowserRouter>
    </FavouriteProvider>
  )
}

export default App