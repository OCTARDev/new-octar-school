"use client";

import Image from 'next/image'
import React from 'react';
import logo from "../../../assets/logo.svg";
import SideImageComponent from '../_components/SideImage';
import Input from '../_components/Input';
import { useForm } from 'react-hook-form';
import { FaRegUser } from "react-icons/fa";
import useFetchCountries from '../../../tanstack-query/helper/useFetchCountries';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { MdMailOutline } from "react-icons/md";
import PasswordInput from '../_components/PasswordInput';
import Link from 'next/link';
import useRegister from '../../../tanstack-query/auth/useRegister';
import { FaSchool } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import SchoolRegisterSchema from '../../../utils/Validation/auth/SchoolRegister';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/user.slice';

export default function Register() {
  const {t} = useTranslation("register");
  const dispatch = useDispatch();
  const {data,isLoading,isError,isSuccess,error} = useFetchCountries();
  const countries = data?.data?.data?.countries;
  const router = useRouter();
  const {register,formState:{errors},handleSubmit,watch} = useForm({resolver:yupResolver(SchoolRegisterSchema)});
  const password = watch("password");

  console.log("p",password);
  
  //api call on success and on error handlers
  const onSuccess = (data)=>{
    console.log(data);
    toast.success("Signin Successfully");
    dispatch(setUser(data?.data?.data));
    // Store user in cookies
    Cookies.set("user", JSON.stringify(user), { path: "/" });
    //re route to home route
    router.push("/home");
  }
  const onError = (error)=>{
    console.log(error);
    toast.error(error?.response?.data?.message || "Error Occured")
  }

  //api query 
  const signup = useRegister({onSuccess,onError});
  const onSubmit = (data)=>{
    signup.mutate(data);
  };

  //validation checks under password
  const validationChecks = [
    { regex: /.{8,}/, message: "Must be at least 8 characters" },
    { regex: /[A-Z]/, message: "Must contain at least one uppercase letter" },
    { regex: /[a-z]/, message: "Must contain at least one lowercase letter" },
    { regex: /[0-9]/, message: "Must contain at least one numeric digit" },
    { regex: /[@$!%*?&]/, message: "Must contain at least one special character (e.g., @#$...)" },
  ];
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-screen'>
      {/* left form */}
      <section className='flex flex-col gap-2 px-2'>
        <Link className='px-10 py-2' href={"/home"}>
            <Image
            src={logo}
            className='w-12 h-12'
            alt='logo'
            priority
            />
        </Link>
        <div className='flex-grow flex flex-col items-center justify-center md:pb-10'>
          <div className='flex flex-col gap-1 max-w-full'>
            <h1 className='text-lg sm:text-2xl md:text-4xl font-bold text-center px-6'>Welcome To OCTAR,</h1>
            <h2 className='text-base sm:text-lg font-bold mt-6'>Create account !</h2>
            <span className='text-start text-gray-500'>Sign up to get started!</span>
            {/* form */}
            <form className='mt-4 flex flex-col justify-center px-2 gap-1' onSubmit={handleSubmit(onSubmit)}>
              {/* first name */}
              <Input 
              register={register}
              icon={<FaRegUser size={18} className='text-gray-500'/>}
              id={"first_name"}
              placeholder={"First Name"}
              type={"text"}
              errors={errors}
              />
              {/* last name */}
              <Input 
              register={register}
              icon={<FaRegUser size={18} className='text-gray-500'/>}
              id={"last_name"}
              placeholder={"Last Name"}
              type={"text"}
              errors={errors}
              />
              {/* school name */}
              <Input 
              register={register}
              icon={<FaSchool size={18} className='text-gray-500'/>}
              id={"school_name"}
              placeholder={"School Name"}
              type={"text"}
              errors={errors}
              />
              {/* phone number */}
              <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
                <div className='p-3 input-control'>
                  <div className='flex gap-2 w-full'>
                      <select
                      defaultValue={"20"}
                      {...register("country_code")}
                      className='hover:cursor-pointer'
                      >
                          {countries?.map((p,i)=>{
                              return(
                                  <option key={i} value={p.phone_code} className='text-black'>{p.phone_code}</option>
                              )
                          })}
                      </select>
                      {errors.country_code && <p className='text-statusError text-sm'>{errors.country_code.message}</p>}
                      <input  
                      placeholder='Phone Number'
                      className='flex-grow'
                      type='number'
                      {...register("phone")}
                      />
                  </div>
                </div>
                {errors.phone && <p className='text-statusError text-sm'>{errors.phone.message}</p>}
              </ErrorBoundary>
              {/* Select Country */}
              <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
                <div className='input-control flex gap-1'>
                  <span><FaFlag size={18} className='text-gray-500'/></span>
                  <select 
                  className='p-3  flex-grow'
                  defaultValue={""}
                  id='country' 
                  {...register("country")}
                  >
                    <option value={""} disabled className='text-gray-500'>Country</option>
                    {countries?.map((c,i)=>{
                      
                      return(
                        <option key={i} value={c?.name} className='text-black'>{c?.name}</option>
                      )
                    })}
                  </select>
                </div>
                {errors.country && <p className='text-statusError text-sm text-start'>{errors.country.message}</p>}
              </ErrorBoundary>
              {/* email */}
              <Input 
                id="email"
                placeholder={"Email"}
                register={register}
                type={"email"}
                icon={<MdMailOutline size={18} className='text-gray-500 font-bold'/>}
                errors={errors}
              />
              {/* password */}
              <PasswordInput 
              register={register}
              placeholder={"Password"}
              id='password'
              errors={errors}
              />
              {/* Validations */}
              <ul className="mt-2 text-sm">
                {validationChecks.map((check, index) => (
                  <li key={index} className={check.regex.test(password) ? "text-green-500" : "text-red-500"}>
                    {check.message}
                  </li>
                ))}
              </ul>
              
              {/* confirm password */}
              <PasswordInput 
              register={register}
              placeholder={"Confirm Password"}
              id='c_password'
              errors={errors}
              />
              {/* submit button */}
              <div className='w-full mt-4'>
                <button 
                className='btn btn-primary w-full !py-3 !rounded-3xl' 
                title='submit' 
                type='submit'>
                  Signup
                </button>
              </div>
              {/* Link to login */}
              <div className='text-sm text-center flex gap-1'>
                <span>You have an acount?</span>
                <Link className='text-primaryA1 hover:underline' href={"/login"}>Login Now</Link>
              </div>
            </form>
          </div>
          
        </div>
      </section>
      {/* right image */}
      <SideImageComponent />
    </div>
    
  )
}
