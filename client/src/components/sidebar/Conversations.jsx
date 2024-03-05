import React from 'react'
import Conversation from './Conversation'
import LogoutButton from './LogoutButton'

const Conversations = () => {
  return (
    <div className=' py-2 flex flex-col overflow-auto'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations