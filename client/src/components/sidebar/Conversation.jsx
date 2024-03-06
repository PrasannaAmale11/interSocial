import useConversation from "../../zustand/useConversation"


const Conversation = ({ conversation, lastIdx, emoji }) => {

const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-gray-800 rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-gray-800" : ""}
    `}
    onClick={() => setSelectedConversation(conversation)}
    >
    <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="User Avatar" />
        </div>
    </div>
    

    <div className=" flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
        <p className=' font-bold text-white'>{conversation.fullname}</p>
        <span className='text-xl'>{emoji}</span>
        </div>
    </div>
    </div>

    {!lastIdx && <div className="divider m-0 p-0 h1"/>}
    

    </>
  )
}

export default Conversation