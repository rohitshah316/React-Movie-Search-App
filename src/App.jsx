import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
 
  const {theme}=useContext(ThemeContext)

  return (
    <div className={`bg-gray-950 min-h-screen text-white ${theme}`}>
      <NavBar/>

      <SearchBar />
    </div>
  )
}

export default App