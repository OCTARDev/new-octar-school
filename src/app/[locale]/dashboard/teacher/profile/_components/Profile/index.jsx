"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useUpdateSchoolProfile from '@/tanstack-query/School/Profile/useUpdate';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import UpdateLogoSection from '../Logo';
import useShowTeacherProfile from '@/tanstack-query/Teacher/Profile/useShow';



export default function ProfileSection() {
  const { data,isLoading,isError,error,isSuccess} = useShowTeacherProfile();
  const {reset,register,handleSubmit,formState:{errors}} = useForm();

  const t = useTranslations("dashboard.school.profile");
  useEffect(()=>{
    if(data && isSuccess){      
      const {name,email,count_classes,media_path,role} = data?.data?.data;    
      reset({name,email,count_classes,role})
    }
  },[data,reset,isSuccess]);
  const onSuccess = (data)=>{
    toast.success(data?.data?.message || "Profile Inforamation Updated Successfully");
  };
  const onError = (e)=>{
    console.log(e);
    toast.error("Error Occurred")
  }
  const updateProfile = useUpdateSchoolProfile({onSuccess,onError});
  const onSubmit = async(data)=>{
    updateProfile.mutate(data)
  }  
  return (
    <div className='flex flex-col gap-8 capitalize'>      
      {/* Header And Title */}
      <div className='flex gap-2 items-center font-bold text-2xl'>
        <span className='bg-primaryA3 p-2 text-primaryA1 rounded-full'><FaUser size={22} /></span>
        <span>{t("header")}</span>
      </div>
      <ErrorBoundary isLoading={isLoading } isError={isError} error={error} isSuccess={isSuccess}>
      <UpdateLogoSection data={data?.data?.data}/>
      <section className='rounded-lg border p-3'>
        <div className='flex md:justify-between md:flex-row flex-col gap-4 mb-4'>
          <h2 className='mb-10 font-bold text-2xl'>{t("information")}</h2>
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className='input-container'>
            <label>{t("email")}</label>
            <input 
              placeholder={t("emailPlaceholder")}
              type='email'
              {...register("email")}
              disabled
            />
          </div>
          {/* Email */}
          <div className='input-container'>
            <label>{t("school_name")}</label>
            <input 
              placeholder={t("schoolNamePlaceholder")}
              type='text'
              {...register("name")}
              disabled
            />
          </div>
          {/* Count Classes */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='input-container'>
              <label>{t("first")}</label>
              <input 
              disabled
              {...register("count_classes",{required:"First Name Is Required"})}
              placeholder='Enter First Name'
              />
            </div>
          </div>
        </form>
      </section>
      </ErrorBoundary>
    </div>
  )
}
