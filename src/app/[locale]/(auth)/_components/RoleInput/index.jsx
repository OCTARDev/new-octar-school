"use client";

import React, { useState } from 'react'

export default function RoleInput({setValue}) {
    const [role,setRole] = useState("school");

    const handleChooseRole = (role)=>{
        setRole(role);
        setValue("type",role)
    }    
  return (
    <div className='my-4 flex flex-col justify-center items-center gap-2'>
        <span className='font-bold text-gray-500'>Choose Your Role </span>
        <div className='flex'>
            <button 
            className={`!rounded-l-full px-8 py-3 btn ${role === "school"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("school")}}
            >
                School
            </button>
            <button 
            className={`!rounded-r-full px-8 py-3 btn  ${role === "teacher"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("teacher")}}
            >
                Teacher
            </button>
        </div>
  </div>
  )
}
