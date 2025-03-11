"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import forgotImg from "@/assets/auth/forgot.png";
import Input from '../_components/Input';
import { MdMailOutline } from "react-icons/md";
import { useForm } from 'react-hook-form';
import useForgotPassword from '@/tanstack-query/auth/useForgotPassword';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '@/utils/Validation/auth/forgotPassword';


export default function ForgotPassword() {
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(forgotPasswordSchema)});
    const router = useRouter();
    //on success & on error handlers

    const onSuccess = (data)=>{
        toast.success("Check your email Address");
    }
    const onError = (error)=>{
        toast.error(error?.response?.data?.message || "Error Occured")
    }
    // query call
    const forgot = useForgotPassword({onSuccess,onError});
    const onSubmit = (data)=>{
        forgot.mutate(data);
    }


  return (
    <div className='min-h-screen flex flex-col'>
        {/* header */}
        <nav className='px-4 border-b-2 flex shadow-lg'>
            <Link className='px-10 py-2' href={"/home"}>
                <Image
                src="/logo.svg"
                height={40}
                width={40}
                alt='logo'
                priority
                />
            </Link>
        </nav>
        {/* main */}
        <main className='flex flex-col gap-2 mt-20 flex-grow'>
            <div className=' flex justify-start items-start px-10 py-2'>
                <Link href={"/login"} className='flex gap-2 items-center nav-link'>
                    <span><FaChevronLeft /></span>
                    <span>Back</span>
                </Link>
            </div>
            <div className=' flex flex-col items-center gap-4 px-4'>
                <div>
                    <Image 
                    src={forgotImg}
                    alt='Forgot password illustration'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>Forgot your password?</h1>
                    <p className='text-sm font-semibold text-gray-500'>
                        Enter your email address below, we’ll send 
                        you a verify code.
                    </p>
                    {/* form */}
                    <form className='my-4 flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            placeholder={"Email address"}
                            icon={<MdMailOutline size={18} className='text-gray-500'/>}
                            register={register}
                            errors={errors}
                            type={"email"}
                            id={"email"}
                        />
                        <button 
                        className='btn btn-primary w-full !py-4 !rounded-3xl'
                        type='submit'
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}
