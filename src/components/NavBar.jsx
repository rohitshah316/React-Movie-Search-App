import { useContext, useState } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { ThemeContext } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
const NavBar = () => {

  const [menuOpen,setMenuOpen]=useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="bg-gray-800 text-white px-6 md:px-10 transition-all duration-300 ease-in">

    <div className=' flex justify-between items-center'>
      <h1 className='font-bold text-4xl py-5 text-white'><a href="/">Movie Search App</a></h1>


      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-5 items-center text-white font-medium">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/popular'>Popular</NavLink>
        <NavLink to='/favourites'>Favourites</NavLink>
        <div>
          <button className="bg-gray-900 p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-700" onClick={toggleTheme}>
            {theme === "light" ? (<WiDaySunny />) : (<MdOutlineNightlightRound />)}
          </button></div>
      </nav>

        {/* Mobile Menu */}
      <button className="md:hidden text-3xl cursor-pointer"
      onClick={()=>setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX/>:<HiMenu/>}
        </button>
      </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 text-white font-medium">
        <NavLink onClick={()=>setMenuOpen(false)} to='/'>Home</NavLink>
        <NavLink onClick={()=>setMenuOpen(false)} to='/popular'>Popular</NavLink>
        <NavLink onClick={()=>setMenuOpen(false)} to='/favourites'>Favourites</NavLink>
        <div>
          <button className="bg-gray-900 p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-70 mb-3" onClick={toggleTheme}>
            {theme === "light" ? (<WiDaySunny />) : (<MdOutlineNightlightRound />)}
          </button></div>
      </nav>
        )}
    </div>
  
  )
}

export default NavBar