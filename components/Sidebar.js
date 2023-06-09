import React from "react";
import Sidebaritem from "./Sidebaritem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-full h-screen lg:min-w-min bg-orange-50">
      <div className="flex items-center space-x-2 py-3 p-5  hover:bg-orange-200 rounded-xl cursor-pointer">
        <img
          src={session?.user.image}
          className="rounded-full cursor-pointer"
          width={40}
          height={40}
          layout="fill"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <a href="/Friends">
        <Sidebaritem Icon={ImUsers} value="Arkadaşlar"/>
        </a>
        <Sidebaritem Icon={MdGroups} value="Gruplar" />
        <Sidebaritem Icon={AiOutlineShop} value="Market" />
        <Sidebaritem Icon={MdOutlineOndemandVideo} value="İzle" />
        <Sidebaritem Icon={BsStopwatch} value="Anılar" />
        <Sidebaritem Icon={MdOutlineExpandMore} value="Daha fazla" />
      </div>
    </div>
  );
};

export default Sidebar;
