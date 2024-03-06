import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className=" md:min-w-[450px] lg:min-w-[800px] flex flex-col h-full ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-gray-800 w-full px-4 py-2 mb-2">
            <span className="text-white font-bold">
              {selectedConversation.fullname}
            </span>
          </div>

          {/* Messages */}
          <div className="overflow-y-auto w-full h-full">
            <Messages />
          </div>
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John ❄</p>
        <p>Select a chat to start messaging</p>
        <QuestionAnswerOutlinedIcon className="" style={{ fontSize: "60px" }} />
      </div>
    </div>
  );
};
