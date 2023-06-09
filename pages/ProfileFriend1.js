import React from "react";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import { getSession, useSession } from "next-auth/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Image from "next/image";
import Header from "./Header";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <main className=" bg-orange-50 w-full flex flex-col flex-item flex-grow object-cover h-full mr-6 overflow-y-auto ">
      <Header />
      {/* Left Sidebar */}
      <div className="flex flex-item justify-between">
        <Sidebar />
        <div clasName="flex-grow object-cover h-screen rounded-[50px] p-28 pt-6 mr-6 overflow-y-auto no-scrollbar">
          {/*  Kapak fotoğrafı */}

          <div className="relative">
            <img
              className="objectFit w-full h-80 object-cover outline-none border-solid border-lightgray rounded-[50px] p-4"
              src="https://img.piri.net/resim/imagecrop/2017/07/10/02/46/resized_c8ea3-39d7a79a24adfkc.jpg"
              alt="Kapak fotoğrafı"
              height={40}
              width={40}
              layout="fill"
            />
            {session?.user.image && (
              <img
                className="objectFit absolute w-40 h-40  rounded-full left-5 bottom-0 transform hover:scale-110 hover:translate-x-2 z-10 top-60left-96"
                src="https://avatars.githubusercontent.com/u/104645493?v=4"
                alt="Profil fotoğrafı"
                height={40}
                width={40}
                layout="fill"
              />
            )}
          </div>
          <div className="bg-orange-50">
            {/* Bilgiler ve paylaşımlar */}

            <div className="grid grid-cols-2 gap-4 p-5">
              {/* Bilgiler */}
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="header border-b-2 border-lightgray w-full flex items-center justify-between">
                    &nbsp;
                    <p className="font-bold text-2xl">{session?.user.name}</p>
                    <a
                      className="flex items-center justify-between mx-5 bg-green-700 text-white py-1 px-4 mb-1 rounded-md hover:bg-[#edaf32] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
                      type="submit"
                    >
                      <FaMinus />
                      &nbsp; Arkadaşı Çıkar
                    </a>
                  </div>
                  &nbsp;
                  <ul className="flex mb-4">
                    <li className="mr-4 mx-10">
                      <strong>Arkadaşlar:</strong> 2
                    </li>
                    <li className="mr-4 mx-5">
                      <strong>Gönderi sayısı:</strong> 0
                    </li>
                  </ul>
                </div>
                &nbsp;
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="header border-b-2 border-lightgray w-full">
                    <h3 className="font-bold text-2xl">Hakkında</h3>
                  </div>
                </div>
                &nbsp;
                
              </div>
              <div className="bg-orange-50 rounded-lg shadow-lg">
                {/* Paylaşımlar */}
                <CreatePost />
                
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </main>
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
export default Profile;