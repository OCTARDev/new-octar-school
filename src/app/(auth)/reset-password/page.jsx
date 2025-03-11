"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import resetImg from "@/assets/auth/reset.png";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import PasswordInput from '../_components/PasswordInput';
import useResetPassword from '@/tanstack-query/auth/useResetPassword';
import { resetPasswordSchema } from '@/utils/Validation/auth/resetPassword';


export default function ResetPassword() {
    const {register,handleSubmit,formState:{errors},watch} = useForm({
        resolver:yupResolver(resetPasswordSchema),
        defaultValues:{
            password:"",
            password_confirmation:""
        }
    });
    const password = watch("password");
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const router = useRouter();

    useEffect(()=>{
        if(!token || !email){
            router.push("/login")
        }
    },[token,email])

    //on success & on error handlers
    const onSuccess = (data)=>{        
        toast.success("Password Updated Successfully");
        router.push("/login")
    }
    const onError = (error)=>{
        toast.error(error?.response?.data?.message || "Error Occured")
    }
    // query call
    const reset = useResetPassword({onSuccess,onError});
    const onSubmit = (data)=>{
        reset.mutate({...data,token,email});
    }
    //validation checks under password
    const validationChecks = [
        { regex: /.{8,}/, message: "Must be at least 8 characters" },
        { regex: /[A-Z]/, message: "Must contain at least one uppercase letter" },
        { regex: /[a-z]/, message: "Must contain at least one lowercase letter" },
        { regex: /[0-9]/, message: "Must contain at least one numeric digit" },
        { regex: /[@$!%*?&]/, message: "Must contain at least one special character (e.g., @#$...)" },
    ];
    
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
                    src={resetImg}
                    alt='Forgot password illustration'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>Create New Password?</h1>
                    <p className='text-sm font-semibold text-gray-500 text-center'>
                        Use  Strong Password
                    </p>
                    {/* form */}
                    <form className='my-4 flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <PasswordInput 
                            placeholder={"New Password"}
                            register={register}
                            errors={errors}
                            id={"password"}
                        />
                        {/* Validations */}
                        <ul className="mt-2 text-sm">
                            {validationChecks.map((check, index) => (
                            <li key={index} className={check.regex.test(password) ? "text-green-500" : "text-red-500"}>
                                {check.message}
                            </li>
                            ))}
                        </ul>
                        <PasswordInput 
                            placeholder={"Confirm New Password"}
                            register={register}
                            errors={errors}
                            id={"password_confirmation"}
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
