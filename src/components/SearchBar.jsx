import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  return (
    <form className='flex justify-center mt-5'>
        <input type="text" 
        placeholder='Search...'
        className='bg-gray-900 px-5 py-4 rounded-l-2xl outline-none w-80 text-white'
        />
        <button type="submit"
        className='px-5 bg-blue-800 rounded-r-2xl hover:bg-blue-900 cursor-pointer'
        ><FaSearch />
</button>
      </form>
  )
}

export default SearchBar