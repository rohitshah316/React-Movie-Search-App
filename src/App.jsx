import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular'
import Favourites from './pages/Favourites'

const App = () => {
 
  const {theme}=useContext(ThemeContext)

  return (
    <BrowserRouter>
     <div className={`bg-gray-950 min-h-screen text-white ${theme}`}>
      <NavBar/>
       <SearchBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourites/>}/>
      <Route path='/popular' element={<Popular/>}/>
    </Routes>
     
    </div>
   


    
    </BrowserRouter>
  )
}

export default App