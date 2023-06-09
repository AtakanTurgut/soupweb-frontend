import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className=" hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[250px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Sohbet</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-orange-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-orange-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-orange-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <a href="/ProfileFriend2">
        <Contacts
          src="https://avatars.githubusercontent.com/u/77547962?v=4"
          name="&nbsp; Atakan Turgut"
          status="Online"
        />
      </a>
      <a href="https://github.com/asimsinan">
        <Contacts
          src="https://avatars.githubusercontent.com/u/1812628?v=4"
          name="&nbsp; Asım Sinan Yüksel"
          status="Online"
        />
      </a>
      <a href="/ProfileFriend1">
        <Contacts
          src="https://avatars.githubusercontent.com/u/104645493?v=4"
          name="&nbsp; Berk Ekim"
          status="Offline"
        />
      </a>
    </div>
  );
};

export default RightSidebar;
