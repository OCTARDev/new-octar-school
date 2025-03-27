"use client";

import React, { useState } from 'react'

export default function PlanType({setValue,value}) {

    const handleChooseRole = (role)=>{
        setValue(role)
    }    
  return (
    <div className='my-4 flex flex-col justify-center items-center gap-2'>
        <span className='font-bold text-gray-500'>Choose Your Role </span>
        <div className='flex'>
            <button 
            className={`!rounded-l-full px-8 py-3 btn ${value === "monthly"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("monthly")}}
            >
                Monthly
            </button>
            <button 
            className={`!rounded-r-full px-8 py-3 btn  ${value === "yearly"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("yearly")}}
            >
                Yearly
            </button>
        </div>
  </div>
  )
}
