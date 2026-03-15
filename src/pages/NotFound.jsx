import React from 'react'
import { FaRegSadTear } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className='flex flex-col  justify-center items-center h-80'>
        <h2 className='text-4xl mb-5 font-bold'>404 Not Found</h2>
        <FaRegSadTear className='text-8xl' />

    </div>
  )
}

export default NotFound