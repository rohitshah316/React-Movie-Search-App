import { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {

    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div className='bg-gray-800 flex justify-between items-center px-10'>
        <h1 className='font-bold text-4xl py-5'>Movie Search App</h1>

        <nav>
            <div>
                <button className="bg-gray-900 p-2 text-2xl rounded-full cursor-pointer hover:bg-gray-700" onClick={toggleTheme}>
                    {theme==="light" ? (<WiDaySunny />):(<MdOutlineNightlightRound />)}
</button></div>
        </nav>
    </div>
  )
}

export default NavBar