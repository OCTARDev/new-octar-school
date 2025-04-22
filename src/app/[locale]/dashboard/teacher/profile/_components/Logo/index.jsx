"use client";
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';

export default function UpdateLogoSection({data}) {
    const [image,setImage] = useState(null);
    const t = useTranslations("dashboard.school.profile");
    useEffect(()=>{
        if(data){
            setImage(data?.media_path)
        }
    },[data])
  return (
    <section>
            {/* Row 5: Media */}
            <div className=" border-gray-400 rounded p-4 flex flex-col md:flex-row gap-4 md:justify-between md:items-end ">
                    {
                    image && 
                    <div  className="relative px-4">
                        <img
                        src={image}
                        alt={`Preview`}
                        className="h-32 w-32 p-4 object-cover rounded-full border bg-primaryA3"
                        />
                        
                    </div>
                }
            </div>
    </section>
  )
}
