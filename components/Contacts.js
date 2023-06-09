import Image from 'next/image'
import React from 'react'

const Contacts = ({ name, src, status }) => {
  return (
    <div className='flex items-center space-x-0 py-3 p-5 mr-4 hover:bg-orange-200 rounded-xl cursor-pointer relative'>
        <Image className='rounded-full cursor-pointer' 
            src={src} height={40} width={40}
        />
        <p className='hidden sm:inline-flex text-sm'>{name}</p>
        {status === "Online" && (
            <div className='bg-green-500 h-4 w-4 rounded-full absolute left-12 bottom-2 border-2'></div>
        )}
        {status === "Offline" && (
            <div className='bg-gray-500 h-4 w-4 rounded-full absolute left-12 bottom-2 border-2'></div>
        )}
    </div>
  )
}

export default Contacts