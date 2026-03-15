import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({onSearch}) => {

  const [query,setQuery]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!query.trim()) return;

    onSearch(query);
  }
  return (


    <form className='flex justify-center mt-5'>
        <input type="text" 
        placeholder='Search...'
        className='bg-gray-900 px-5 py-4 rounded-l-2xl outline-none w-80 text-white'
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
        />
        <button type="submit" onClick={handleSubmit}
        className='px-5 bg-blue-800 rounded-r-2xl hover:bg-blue-900 cursor-pointer'
        ><FaSearch />
</button>
      </form>
  )
}

export default SearchBar