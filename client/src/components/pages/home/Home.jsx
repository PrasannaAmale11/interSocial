import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import MessageContainer from "../../messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex justify-center items-start p-4 sm:h-[450px] md:h-[550px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <div className=" overflow-y-auto h-full w-full">
      <Sidebar />
      </div>

      <MessageContainer/>
    </div>
  );
};

export default Home;
