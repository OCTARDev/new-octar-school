"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useFetchCountries from '@/tanstack-query/helper/useFetchCountries';
import useShowProfile from '@/tanstack-query/School/Profile/useShow';
import useUpdateSchoolProfile from '@/tanstack-query/School/Profile/useUpdate';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import UpdateLogoSection from '../Logo';
import { MdEdit } from "react-icons/md";
import SubDetailsSection from '../SubDetails';



export default function ProfileSection() {
  const [disabled,setDisabled] = useState(true);
  const { data,isLoading,isError,error,isSuccess} = useShowProfile();
  const {reset,register,handleSubmit,formState:{errors}} = useForm();
  const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,error:helpError,isSuccess:helpIsSuccess} = useFetchCountries();
  const t = useTranslations("dashboard.school.profile");
  useEffect(()=>{
    if(data && isSuccess){      
      const {first_name,last_name,email,phone,country_code,country,school_name,student,role} = data?.data?.data?.user;    
      reset({first_name,last_name,email,phone,country_code,country,school_name,student,role})
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
      <ErrorBoundary isLoading={isLoading || helpIsLoading} isError={helpIsError || isError } error={error || helpError} isSuccess={isSuccess || helpIsSuccess}>
      <UpdateLogoSection data={data?.data?.data?.user}/>
      <section className='rounded-lg border p-3'>
        <div className='flex md:justify-between md:flex-row flex-col gap-4 mb-4'>
          <h2 className='mb-10 font-bold text-2xl'>{t("information")}</h2>
          {/* Edit Button */}
          <div>
            <button 
            type='button'
            className={`btn btn-blue `}
            onClick={()=>setDisabled(!disabled)}
            >
              <span><MdEdit size={24}/></span>
              <span>{t("editButton")}</span>
              
            </button>
          </div>
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
          {/* School Name */}
          <div className='input-container'>
            <label>{t("school_name")}</label>
            <input 
              placeholder={t("schoolNamePlaceholder")}
              type='text'
              {...register("school_name")}
            />
          </div>
          {/* No of Students */}
          <div className='input-container'>
            <label>{t("noStudents")}</label>
            <input 
              placeholder={t("noStudents")}
              type='text'
              {...register("student")}
              disabled
            />
          </div>
          {/* Role */}
          <div className='input-container'>
            <label>{t("role")}</label>
            <input 
              placeholder={t("role")}
              type='text'
              {...register("role")}
              disabled
            />
          </div>
          {/* First and last Name */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='input-container'>
              <label>{t("first")}</label>
              <input
              disabled={disabled}
              {...register("first_name",{required:"First Name Is Required"})}
              placeholder='Enter First Name'
              />
            </div>
            {errors.first_name && 
            <p className='text-red-500 text-sm'>{errors?.first_name.message}</p>}
            <div className='input-container'>
              <label>{t("last")}</label>
              <input 
              disabled={disabled}
              {...register("last_name",{required:"Last Name Is Required"})}
              placeholder='Enter Last Name'
              />
            </div>
            {errors.last_name && 
            <p className='text-red-500 text-sm'>{errors?.last_name.message}</p>}
          </div>
          {/* Phone Number */}
          <div>
            <label>{t("phone")}</label>
            <div className='flex gap-2 items-center flex-col sm:flex-row'>
              <div className='input-container sm:w-20 w-full'>
                <select
                  disabled={disabled}
                  {...register("country_code",{required:"Phone Code Is Required"})}
                >
                {
                  helpData?.data?.data?.countries?.map((p,i)=>{
                    return(
                      <option key={i} value={p?.phone_code}>{p?.phone_code}</option>
                    )
                  })
                }
                </select>
              </div>
              <div className='input-container sm:flex-grow w-full'>
                <input 
                  disabled={disabled}
                  {...register("phone",{required:"Phone Number Is Required"})}
                  type='tel'
                  placeholder='Phone '
                />
              </div>
            </div>
          </div>
          {errors.phone && 
            <p className='text-red-500 text-sm'>{errors?.phone.message}</p>}
          {/* Country */}
          <div className='input-container'>
            <label>{t("country")}</label>
            <select
            disabled={disabled}
            {...register("country",{required:"Country Is Required"})}
            >
              {helpData?.data?.data?.countries?.map((country,i)=>{
                return(
                  <option key={i} value={country?.name}>{country?.name}</option>
                )
              })}
            </select>
          </div>
          {errors.country && 
            <p className='text-red-500 text-sm'>{errors?.country.message}</p>}
          {/* Button */}
          <div className='flex justify-end'>
            <button 
              className='btn btn-primary'
              disabled={disabled}
              type='submit'
              >
                {t("submit")}
            </button>
          </div>
        </form>
      </section>
      <SubDetailsSection subs={data?.data?.data?.subscription}/>
      </ErrorBoundary>
    </div>
  )
}
