import PopPage from '@/components/PopPage'
import useSubscribe from '@/tanstack-query/Home/Subscription/useSubscribe';
import React from 'react'
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
export default function ConfirmRequest({isExpanded,handleCloseModal,data}) {
    const router = useRouter();
    const onSuccess = (data)=>{
        console.log(data);
        
        toast.success( "Request has been sent Successfully");
        setTimeout(()=>{
            router.push("/home")
        },4000)

    }   
    const onError = (e)=>{
        console.log(e.response.data.message);
        toast.error(e.response.data.message || "Error Occurred")
    }
    const sendRequest = useSubscribe({onSuccess,onError});
    const request = data?.data?.data?.request_date;
    const message = data?.data?.data?.message;
    const handleSend = ()=>{
        sendRequest.mutate(request);
        handleCloseModal();       
    }
  return (
    <PopPage isExpanded={isExpanded} handleCloseModal={handleCloseModal}>
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-2xl font-bold capitalize'>{message}</h1>
            <div className='flex gap-4'>
            <button onClick={handleSend} className='bg-green-500 text-white px-4 py-2 rounded-lg'>Yes</button>
            <button onClick={handleCloseModal} className='bg-red-500  text-white px-4 py-2 rounded-lg'>No</button>
            </div>
        </div>
    </PopPage>

  )
}
