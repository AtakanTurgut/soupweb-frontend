
import StoryCard from "./StoryCard";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

import { React, useState, useRef } from "react";

import axios from "axios";
import { addPost } from "../public/src/features/postSlice";
import { useDispatch } from "react-redux";


const stories = [
  {
    name: "Özcan Çavga",
    src: "https://links.papareact.com/4zn", //`${session?.user.image}`,
    profile:
      "https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/335616259_926118535486626_8946019301307835554_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gNW5z0hTQ2sAX8p8-WN&_nc_ht=scontent.fayt2-3.fna&oh=00_AfBxg74fkTsgPl1LrO8-r1Rmq5BmnMVZU6_Wx5Jple-H6Q&oe=6463CBF0",
  },
  {
    name: "Atakan Turgut",
    src: "https://images.pexels.com/photos/2526127/pexels-photo-2526127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    profile:
      "https://avatars.githubusercontent.com/u/77547962?v=4",
  },
  {
    name: "Berk Ekim",
    src: "https://links.papareact.com/k2j",
    profile:
      "https://avatars.githubusercontent.com/u/104645493?v=4",
  },
  {
    name: "Asım Sinan Yüksel",
    src: "https://links.papareact.com/xql",
    profile: "https://avatars.githubusercontent.com/u/1812628?v=4",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  const { data: session } = useSession();
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click()
  };

  return (
    <div className=" relative flex justify-center space-x-3 mx-auto">
      <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />
      <BsPlusCircleFill
        className="absolute top-1/3 left-10 z-10 cursor-pointer h-14 w-14 text-green-700
        rounded-full bottom-4 border-4 border-orange-50"
        accept="image/*"
        onClick={handleClick}
        type="file"
        hiddenFileInput
      />
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
