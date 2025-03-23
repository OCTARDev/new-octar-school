"use client";
import Cookies from "js-cookie";
import Image from 'next/image'
import React, { useState } from 'react';
import logo from "../../../assets/logo.svg";
import SideImageComponent from '../_components/SideImage';
import { FaRegUser } from "react-icons/fa";
import PasswordInput from '../_components/PasswordInput';
import Link  from 'next/link';
import RoleInput from '../_components/RoleInput';
import { useForm } from 'react-hook-form';
import useLogin from '../../../tanstack-query/auth/useLogin';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/user.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { signinSchema } from '../../../utils/Validation/auth/Login';
import Input from '@/components/Input';

export default function Login() {  
  const router = useRouter();
  const dispatch = useDispatch();
  const [rememberMe , setRememberMe] = useState(false);
  const { register , formState:{errors} , handleSubmit , setValue } = useForm({
    resolver:yupResolver(signinSchema),
    defaultValues:{
    type:"school",
    email:"",
    password:"",
  }});
  const onSuccess = (data)=>{
    const user = data?.data?.data;
    toast.success("Signin Successfully");
    //set cookie expiration
    const expires = rememberMe ? 30 : null;

    // Store user in cookies
    Cookies.set("user", JSON.stringify(user), { 
      expires,
      path: "/",
      secure:true,
      sameSite:"Strict"
  });
  /* window.location.reload(); */
  dispatch(setUser(user));
  //re route to home route
  if(!!user.user.email_verified_at){
    router.push("/home")
  }else{
    router.push("/otp");
  }
  }

  const onError = (error)=>{
      console.log(error);
      toast.error(error?.response?.data?.message || "Error Occurred")
  }

  const login = useLogin({onSuccess,onError});
  const onSubmit = (data)=>{
    login.mutate(data);
  };  
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 min-h-screen'>
      {/* left form */}
      <section className='flex flex-col gap-2 px-2'>
        <Link className='px-10 py-2' href={"/home"}>
            <Image
            src={logo}
            className='w-12 h-12'
            alt='logo'
            />
        </Link>
        <div className='flex-grow flex flex-col items-center justify-center'>
          <form className='flex flex-col gap-1 pb-4' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-3xl font-bold text-center'>Welcome To OCTAR,</h1>
            <span className='text-start text-gray-500 font-bold'>Login to continue !</span>
            {/* form */}
            {/* choose your role */}
            <RoleInput 
              setValue={setValue}
            />
            {/* inputs */}
            <Input 
            register={register}
            id={"email"}
            placeholder={"Email"}
            icon={<FaRegUser size={18} className='text-gray-400'/>}
            errors={errors}
            />
            {/* password */}
            <PasswordInput 
              placeholder={"Password"}
              register={register}
              errors={errors}
            />
            {/* remember me &  Forgot password */}
            <div className='flex gap-3 my-2 justify-between px-2 text-sm text-gray-500'>
              <div className='flex gap-1 text-sm text-gray-500'>
                <input 
                type='checkbox'
                id='rememberMe'
                className='border'
                onChange={(e)=>setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <Link className='hover:underline' href={"/forgot-password"}>Forgot Password?</Link>
            </div>
            {/* Button */}
            <div>
              <button 
              className='btn btn-primary  w-full !py-4 !rounded-3xl' 
              type='submit'>
                Login
              </button>
            </div>
            {/* Link to register */}
            <div className='text-sm text-center flex gap-1 justify-center'>
              <span className='text-gray-500'>Not a member?</span>
              <Link href={"/register"} className='text-primaryA1 hover:underline'>Register Now</Link>
            </div>
          </form>
          
        </div>
      </section>
      {/* right image */}
      <SideImageComponent />
    </main>
    
  )
}
