"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useUpdateSchoolProfile from '@/tanstack-query/School/Profile/useUpdate';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import UpdateLogoSection from '../Logo';
import useParentProfileShow from '@/tanstack-query/Parent/Profile/useShow';



export default function ProfileSection() {
  const { data,...methods} = useParentProfileShow();
  const response = data?.data?.data || {};
  console.log(response);
  
  const {reset,register,handleSubmit} = useForm();

  const t = useTranslations("dashboard.school.profile");
  useEffect(()=>{
    if(data && methods.isSuccess){      
      const res = data?.data?.data;    
      reset(res)
    }
  },[data,reset,methods.isSuccess]);


 
  return (
    <div className='flex flex-col gap-8 capitalize'>      
      {/* Header And Title */}
      <div className='flex gap-2 items-center font-bold text-2xl'>
        <span className='bg-primaryA3 p-2 text-primaryA1 rounded-full'><FaUser size={22} /></span>
        <span>Parent Profile</span>
      </div>
      <div className='space-x-2 font-bold text-primaryA1'>
        <span className=''>Parent Code:</span>
        <span>{response?.parent_code}</span>
      </div>
      <ErrorBoundary {...methods}>
      <UpdateLogoSection data={data?.data?.data}/>
      <section className='rounded-lg border p-3'>
        <div className='flex md:justify-between md:flex-row flex-col gap-4 mb-4'>
          <h2 className='mb-10 font-bold text-2xl'>Student Information</h2>
        </div>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          {/* School Name */}
          <div className='input-container'>
            <label>School Name</label>
            <input
              type='text'
              {...register("school_name")}
              disabled
            />
          </div>
          {/* Student Name */}
          <div className='input-container'>
            <label>Student Name</label>
            <input
              type='text'
              {...register("name")}
              disabled
            />
          </div>
          {/* Student Code */}
          <div className='input-container'>
            <label>Student Code</label>
            <input 
              type='text'
              {...register("student_code")}
              disabled
            />
          </div>
          {/* Level */}
          <div className='input-container'>
            <label>Level</label>
            <input 
              type='text'
              {...register("level")}
              disabled
            />
          </div>
          {/* Grade */}
          <div className='input-container'>
            <label>Grade</label>
            <input 
              type='text'
              {...register("grade")}
              disabled
            />
          </div>
          {/* Class Name */}
          <div className='input-container'>
            <label>Class Name</label>
            <input 
              type='text'
              {...register("class_name")}
              disabled
            />
          </div>
        </form>
      </section>
      </ErrorBoundary>
    </div>
  )
}
