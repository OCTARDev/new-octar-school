import { useRouter } from 'next/navigation';
import React from 'react'
import { MdAdd } from "react-icons/md";
export default function AddComponent() {
    const router = useRouter();
  return (
    <div 
    className='fixed bottom-10 right-10  bg-primaryA3  rounded-full shadow-xl opacity-50 hover:opacity-100  transition-all duration-300 ease-in-out hover:cursor-pointer'
    title='Add Post'
    onClick={()=>router.push("community/add")}
    >
        <MdAdd  size={50} className=' rounded-full hover:scale-125 transition-all duration-300 ease-in-out'/>
    </div>
  )
}
