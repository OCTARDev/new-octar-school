"use client";
import useStoreLogo from '@/tanstack-query/School/Profile/useStoreLogo';
import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { MdEdit } from "react-icons/md";
import { useTranslations } from 'next-intl';
export default function UpdateLogoSection({data}) {
    const [image,setImage] = useState(null);
    const {register,setValue,handleSubmit,formState:{errors}} = useForm();
    const t = useTranslations("dashboard.school.profile");
    const onSuccess = (data)=>{
        console.log(data);
        
        toast.success(data?.data?.message || "Logo Updated Successfully")
    };
    const onError = (e)=>{

    }
    
    useEffect(()=>{
        if(data){
            setImage(data?.media_path)
        }
    },[data])
    const updateLogo = useStoreLogo({onSuccess,onError});
    const onSubmit = (data)=>{
        updateLogo.mutate(data);
    }
  return (
    <section>
         
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            {/* Row 5: Media */}
            <div>
            <div className=" border-gray-400 rounded p-4 flex flex-col md:flex-row gap-4 md:justify-between md:items-end ">
                <label className="cursor-pointer text-primaryA1" htmlFor='logo'>
                    <input
                    type="file"
                    accept="image/*"
                    id='logo'
                    multiple
                    {...register("media")}
                    className="hidden"
                    onChange={(e)=>handleSingleFileChange(e,setImage,setValue,"media")}
                    />
                    {
                    image && 
                    <div  className="relative px-4">
                        <img
                        src={image}
                        alt={`Preview`}
                        className="h-32 w-32 p-4 object-cover rounded-full border bg-primaryA3"
                        />
                        <span className='absolute right-0 bottom-1.5 rounded-full bg-neutral10 p-2 border-primaryA1 border-2'><MdEdit size={24}/></span>
                    </div>
                }
                </label>
                {/* Button */}
                <div className='flex justify-end'>
                    <button className='btn btn-primary' type='submit'>{t("logoButton")}</button>
                </div>
            
            </div>
            </div>
            
        </form>
    </section>
  )
}
