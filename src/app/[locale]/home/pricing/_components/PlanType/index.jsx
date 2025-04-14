"use client";

import React, { useState } from 'react'
import { useTranslations } from 'use-intl';

export default function PlanType({setValue,value}) {
    const t = useTranslations("pricing");
    const handleChooseRole = (role)=>{
        setValue(role)
    }    
  return (
    <div className='my-4 flex flex-col justify-center items-center gap-2'>
        <div className='flex'>
            <button 
            className={`!rounded-s-full px-8 py-3 btn capitalize ${value === "monthly"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("monthly")}}
            >
                {t("monthly")}
            </button>
            <button 
            className={`!rounded-e-full px-8 py-3 btn capitalize ${value === "yearly"? "btn-primary" :"bg-gray-300"}`} 
            type='button'
            onClick={()=>{handleChooseRole("yearly")}}
            >
                {t("yearly")}
            </button>
        </div>
  </div>
  )
}
