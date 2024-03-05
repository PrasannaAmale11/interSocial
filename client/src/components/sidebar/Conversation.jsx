import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-gray-800 rounded p-2 py-1 cursor-pointer'>
    <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
        </div>
    </div>
    

    <div className=" flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
        <p className=' font-bold text-white'>John Doe</p>
        <span className='text-xl'>🎃</span>
        </div>
    </div>
    </div>
    <div className="divider m-0 p-0 h1"/>

    </>
  )
}

export default Conversation