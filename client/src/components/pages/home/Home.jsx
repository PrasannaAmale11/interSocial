import React, { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import MessageContainer from "../../messages/MessageContainer";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex justify-center items-start p-4 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar */}
      <div className={`overflow-y-auto h-full w-full ${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
        <Sidebar />
      </div>

      {/* Burger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700">
        {isSidebarOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          ) : (
          

            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          )}
        </button>
      </div>

      {/* Message Container */}
      <div className={`${isSidebarOpen ? 'hidden' : 'block'} sm:block ${isSidebarOpen ? '' : 'h-[95vh] sm:h-full'}`}>
        <MessageContainer/>
      </div>
    </div>
  );
};

export default Home;
