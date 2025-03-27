"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import OTPInput from 'react-otp-input';
import useVerifyOtp from '@/tanstack-query/auth/useVerifyOtp';
import useResendOtp from '@/tanstack-query/auth/useResendOtp';
import { useDispatch } from 'react-redux';
import { logOut } from '@/redux/slices/user.slice';


export default function Otp() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(180);
    const [isClicked , setIsClicked] = useState(false);
    const [otp ,setOtp] = useState("");

    const handleLogout = () => {
        dispatch(logOut());
        console.log("log out");
        router.push("/login");

    }
    //on success & on error handlers
    const onSuccess = (data)=>{
        console.log(data);
        
        toast.success("Email Verified Successfully");
        router.push("/home");
    }
    const onError = (error)=>{
        console.log("e",error);
        toast.error(error?.response?.data?.message || "Error Occured")
    }
    // query call
    const verify = useVerifyOtp({onSuccess,onError});
    const onSubmit = (e)=>{
        e.preventDefault();
        console.log(otp);
        verify.mutate({otp})
    }
    /* handling timer */
    useEffect(() => {
        let interval;
        if (isClicked && timer > 0) {
          interval = setInterval(() => {
            setTimer((prev) => prev - 1);
          }, 1000);
        }
        if (timer === 0) {
          setIsClicked(false);
          setTimer(30); // Reset timer for next click
        }
        return () => clearInterval(interval);
      }, [isClicked, timer]);
      /* handling resending otp */
    const resendOnSuccess = (data)=>{
    setIsClicked(true);
    setTimer(180);
    toast.success(data?.data?.message || "otp has been sent to mail please check your mail")
    }
    const resendOnError = (error)=>{
        console.log(error);
        toast.error(error?.response?.data?.message || "Error Occured")
    }
    const resendOtp = useResendOtp({onSuccess:resendOnSuccess,onError:resendOnError});
    const handleResendOtp = ()=>{
    resendOtp.mutate();
    }


  return (
    <div className='min-h-screen flex flex-col'>
        {/* header */}
        <nav className='px-4 border-b-2 flex items-center justify-between shadow-lg'>
            <Link className='px-10 py-2' href={"/home"}>
                <Image
                src="/logo.svg"
                height={40}
                width={40}
                alt='logo'
                priority
                />
            </Link>
            <div>
                <button className='btn btn-primary' type='button' onClick={handleLogout}>Logout</button>
            </div>
            
        </nav>
        {/* main */}
        <main className='flex flex-col gap-2 mt-20 flex-grow'>
            {/* back button */}
            <div className=' flex justify-start items-start px-10 py-2'>
                <Link href={"/login"} className='flex gap-2 items-center nav-link'>
                    <span><FaChevronLeft /></span>
                    <span>Back</span>
                </Link>
            </div>
            {/* form */}
            <div className=' flex flex-col items-center gap-4 px-4'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl font-bold'>Enter the verified code</h1>
                    <p className='text-sm font-semibold text-gray-500 '>
                    We just sent you a verified code via an email <span></span>
                    </p>
                    <form className='my-4 flex flex-col gap-2' onSubmit={onSubmit}>
                        <OTPInput 
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={
                                (props) => <input {...props} 
                                            className='border !w-12 !h-12 rounded-md  mx-2'
                                            />
                                    }
                            containerStyle={"justify-between px-2"}
                        />
                        <div className='flex justify-between gap-2'>
                            {isClicked  &&
                            <div className='text-sm text-statusError'>
                                <span >Expires in:</span>
                                <span><span> {timer} </span></span>
                            </div>
                            }
                            <div className='ms-auto'>
                                <button 
                                disabled={isClicked}
                                onClick={handleResendOtp}
                                type='button' 
                                className='text-statusSuccess text-sm hover:underline disabled:text-gray-500 '
                                >Resend Code</button>
                            </div>
                        </div>
                        <button 
                        className='btn btn-primary w-full !py-4 !rounded-3xl'
                        type='submit'
                        disabled={otp.length < 6}
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
