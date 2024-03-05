import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-gray-700 text-white'>
        <SearchIcon/>
        </button>
    </form>
  )
}

export default SearchInput