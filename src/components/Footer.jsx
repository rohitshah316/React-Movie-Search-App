import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-gray-800 mt-5 grid grid-cols-1 md:grid-cols-2 scroll inset-x-0 bottom-0 w-full p-10 text-white'>
        <div className='flex flex-col'>
            <h2 className='font-bold'>Pages</h2>
            <NavLink to='/'>Home</NavLink>
        <NavLink to='/popular'>Popular</NavLink>
        <NavLink to='/favourites'>Favourites</NavLink>
        </div>
        <div className='mt-5'>
            <h2>&copy; React Movie Search App</h2>
            <p>Created By <span className='italic '>Rohit Shah</span></p>
            <span>Source Code: </span>
            <NavLink to='https://github.com/rohitshah316/React-Movie-Search-App.git' target='_blank' className='italic text-red-400'>Github</NavLink>
        </div>
    </div>
  )
}

export default Footer