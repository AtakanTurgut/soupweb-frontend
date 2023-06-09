import React from "react";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Header from "./Header";

const Feed = () => {
  return (
    <main className="bg-orange-50">
      <Header />
      <div className="flex flex-item">     
      {/* Left Sidebar */}
      <Sidebar />
      <div className="flex-grow object-cover h-screen rounded-[50px] p-28 pt-6 mr-6 overflow-y-auto no-scrollbar">
        <Stories />
        <div className="mx-auto max-w-md md:max-w-xl lg:max-w-5xl pt-6">
          {/* Create Box */}
          <CreatePost />
          {/* Posts */}
          <Posts />
        </div>
      </div>
      {/* Right Sidebar */}
      <RightSidebar />
      </div>
    </main>
  );
};

export default Feed;
