import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  return (
    <form className=' px-4 my-3 w-full'>
        <div className="w-full relative">
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white' 
            placeholder='Send a Messsage'/>

            <button type='submit' className='absolute inset-y-0 end-0 right-0 flex items-center w-10'>
                <SendIcon style={{color:'white'}}/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput