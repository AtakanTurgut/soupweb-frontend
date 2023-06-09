import React, { useRef } from "react";
import { signIn } from "next-auth/react";
("next-auth/client");
import { useRouter } from "next/router";
import Image from "next/image";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import Header from "./Header";
import { BsCamera } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useState } from "react";

const UpdateProfile = () => {
  const { data: session } = useSession();
  const [showInputs, setShowInputs] = useState(false);

  const handleButtonClick = () => {
    setShowInputs(!showInputs);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click()
  };

  return (
    <main className="bg-orange-50">
      <Header />
      <div className="flex flex-item justify-between ">
        {/* Left Sidebar */}
        <Sidebar />
        <div className="bg-white p-6 rounded-lg shadow-lg mr-6 mx-6 h-2/4 mt-6 w-3/6">
          <div className="header border-b-2 border-lightgray w-full">
            <h3 className="font-bold text-2xl mt-2">Profili Güncelle</h3>
            <p>Profil bilgilerini değiştirebilirsin.</p>
          </div>

          <div className="body mt-5">
            <form className="flex w-full flex-col justify-center">
              <div className="email_password flex flex-col gap-3 mt-3">
                <input
                  type="text"
                  className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                  placeholder={session?.user.name.split(" ")[0]}
                  name="fname"
                />
                <input
                  type="text"
                  className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                  placeholder={session?.user.name.split(" ")[1]}
                  name="lname"
                />
                <input
                  type="text"
                  className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                flex-1 outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                  placeholder={session?.user.email}
                  name="email"
                />
                <div className="flex flex-item rounded-lg h-12 flex-grow focus:outline-none font-medium bg-gray-100 w-100 relative">
                  <input
                    className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                    flex-1 outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                    type="text"
                    placeholder="Profil Fotoğrafı URL"
                  ></input>
                  <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />
                  <BsCamera className="cursor-pointer mt-4 absolute right-5"
                  onClick={handleClick} />
                </div>

                <div className="flex flex-item rounded-lg h-12 flex-grow focus:outline-none font-medium bg-gray-100 w-100 relative">
                  <input
                    className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                    flex-1 outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                    type="text"
                    placeholder="Kapak Fotoğrafı URL"
                  ></input>
                  <input type="file" ref={hiddenFileInput} style={{ display: 'none' }} />
                  <BsCamera className="cursor-pointer mt-4 absolute right-5" 
                  onClick={handleClick}/>
                </div>

                <a
                  className="flex items-center justify-center bg-green-700 text-white mt-5 py-2 px-4 rounded-md hover:bg-[#edaf32] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
                  type="submit"
                  onClick={handleButtonClick}
                >
                  Şifre Değiştir
                </a>

                {showInputs && (
                  <div className="flex flex-col mt-4">
                    <input
                      type="text"
                      className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100"
                      placeholder="Eski Şifre"
                      name="oldpassword"
                    />
                    <input
                      type="password"
                      className="border-gray-300 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600
                outline-none border-1 border-solid border-lightgray rounded-lg p-3 bg-gray-100 mt-2"
                      placeholder="Yeni Şifre"
                      name="newpassword"
                    />
                  </div>
                )}
              </div>
              <div className="mt-5">
                <a
                  className="bg-green-700 text-white mt-5 py-2 px-4 rounded-md hover:bg-[#edaf32] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
                  type="submit"
                >
                  Profilini Güncelle
                </a>
                &nbsp;{" "}
                <a className="text-green-800">Bilgilerini kaydetmeyi unutma!</a>
              </div>
            </form>
          </div>
        </div>
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </main>
  );
};

export default UpdateProfile;
