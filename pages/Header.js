import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { IoLogOutOutline, IoGameControllerOutline } from "react-icons/io5";
import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import Feed from "./Feed";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky z-50 flex h-16 bg-orange-200 items-center p-2 shadow-md top-0 w-screen">
      {/* Left */}
      <div className="flex min-w-fit">
        <a href="http://localhost:3000/">
          <img
            className="cursor-pointer "
            height={55}
            width={55}
            src="https://user-images.githubusercontent.com/77547962/238136976-4f26f402-355b-4192-af9a-4b200bead6e6.png"
            type="submit"
          />
        </a>
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full  bg-orange-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink"
            type="text"
            placeholder="SoupWeb'de Ara"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center  h-14 px-4 md:px-10 rounded-md md:hover:bg-orange-100 cursor-pointer">
            <a href="http://localhost:3000/#_=_">
              <HiOutlineHome className="mx-auto text-green-700" size={25} />
            </a>
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-orange-100 cursor-pointer">
            <RiFlag2Line className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-orange-100 cursor-pointer">
            <MdOutlineOndemandVideo
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-orange-100 cursor-pointer ">
            <AiOutlineShop className="mx-auto text-gray-500" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-orange-100 cursor-pointer ">
            <IoGameControllerOutline
              className="mx-auto text-gray-500"
              size={25}
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2 justify-end min-w-fit">
        <a href="/Profile">
          <img
            src={session?.user.image}
            href="/Profile"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </a>
        <a
          href="/Profile"
          type="submit"
          className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-1 max-w-xs"
        >
          {session?.user.name.split(" ")[0]}
        </a>

        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10  bg-orange-200 text-gray-600 rounded-full p-2 cursor-pointer md:hover:bg-orange-100"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10  bg-orange-200 text-gray-600 rounded-full p-2 cursor-pointer md:hover:bg-orange-100"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10  bg-orange-200 text-gray-600 rounded-full p-2 cursor-pointer md:hover:bg-orange-100"
        />
        <IoLogOutOutline
          size={20}
          onClick={signOut}
          href="http://localhost:3000/#_=_"
          type="submit"
          className=" hidden lg:inline-flex h-10 w-10  bg-orange-200 text-gray-600 rounded-full p-2 cursor-pointer md:hover:bg-orange-100"
        />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
export default Header;
