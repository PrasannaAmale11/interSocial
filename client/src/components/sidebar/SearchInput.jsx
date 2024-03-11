import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast'
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation,} = useConversation();
  const {conversations}= useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return ;

    if(search.length < 3){
    return  toast.error("Search must be at least 3 characters long")
    }
    const conversation = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLocaleLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");

    }else toast.error("No Such User found")
  }
  return (
    <form className='flex items-center gap-2 searchComp' onSubmit={handleSubmit}>
        <input type="text" className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-gray-700 text-white'>
        <SearchIcon/>
        </button>
    </form>
  )
}

export default SearchInput