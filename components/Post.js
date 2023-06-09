import Image from "next/image";
import { React, useRef, useState } from "react";
import { FiMoreHorizontal, FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { BsCamera } from "react-icons/bs";

const Post = ({ post }) => {
  const { data: session } = useSession();

  const [showInputs, setShowInputs] = useState(false);

  const handleButtonClick = () => {
    setShowInputs(!showInputs);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const [textColor, setTextColor] = useState('black');

  const textLike = () => {
    if (textColor === 'black') {
      setTextColor('blue');
    } else if (textColor === 'blue') {
      setTextColor('black');
    }
  };

  return (
    <div className="flex flex-col" key={post.id}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2 relative">
          <img src={post.profilePic} className="rounded-full w-10 h-10" />
          <div>
            <p className="font-medium">{post.name}</p>
            <p className="text-xs text-gray-500">{post.timeStamp}</p>
          </div>

          <div className="ml-auto tooltip flex justify-between  relative">
            <a
              className="flex items-center justify-between mx-5 py-2 px-4 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 cursor-pointer"
              type="submit"
            >
              <FiMoreHorizontal onClick={handleButtonClick} />
              {showInputs && (
                <div className="flex flex-row items-center mt-0">
                  &nbsp;
                  <a className="hover:underline">Gönderiyi kaldır.</a>
                </div>
              )}
            </a>
          </div>
        </div>
        <p className="py-4">{post.post}</p>
      </div>
      {post.image != null && (
        <div className="relative h-60 md:h-96 bg-white">
          <Image src={post.image} objectFit="cover" layout="fill"></Image>
        </div>
      )}
      <div className="flex items-center bg-white pl-10 text-red-600">
        <FiThumbsUp />
        &nbsp;
        <a className="w-100">26</a>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div
          className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer"
          style={{ color: textColor }}
          onClick={textLike}
        >
          <FiThumbsUp className="h-4" />
          <p className="text-xs sm:text-base">Beğen</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4" />
          <p className="text-xs sm:text-base">Yorum</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4" />
          <p className="text-xs sm:text-base">Paylaş</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white p-2">
        <Image
          src="https://avatars.githubusercontent.com/u/77547962?v=4"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1 p-2">
          <div className="rounded-full flex-grow justify-between relative">
            <p className="pl-4 flex flex-item items-center">
              <a className="font-medium mr-5">Atakan Turgut</a>
              <a className="text-xs text-gray-500">{post.timeStamp}</a>
            </p>
            <p
              className="rounded-full h-10 flex-grow focus:outline-none font-small bg-gray-100 px-4 py-2"
              type="text"
            >
              Kardeşim çok güzel gidiyoruz :D
            </p>
            <FiThumbsUp className="cursor-pointer h-4 absolute left-5" />
          </div>
        </form>
      </div>
      {/*  */}
      <div className="flex items-center justify-center bg-white p-2">
        <Image
          src="https://avatars.githubusercontent.com/u/104645493?v=4"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1 p-2">
          <div className="rounded-full flex-grow justify-between relative">
            <p className="pl-4 flex flex-item items-center">
              <a className="font-medium mr-5">Berk Ekim</a>
              <a className="text-xs text-gray-500">{post.timeStamp}</a>
            </p>
            <p
              className="rounded-full h-10 flex-grow focus:outline-none font-small bg-gray-100 px-4 py-2"
              type="text"
            >
              Kelle paça yok muydu???
            </p>
            <FiThumbsUp className="cursor-pointer h-4 absolute left-5" />
          </div>
        </form>
      </div>
      {/*  */}
      <div className="flex items-center justify-center bg-white p-2">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1 p-1">
          <div className="flex flex-item rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4 w-100">
            <input
              className="flex flex-item rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
              type="text"
              //ref={inputRef}
              placeholder="Yorum yaz..."
            ></input>
            <input
              type="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
            <BsCamera className="cursor-pointer mt-4" onClick={handleClick} />
          </div>

          <button hidden onClick="#">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
