import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className=" px-4 my-3 w-full" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white"
          placeholder="Send a Messsage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 right-0 flex items-center w-10"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            <SendIcon style={{ color: "white" }} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
