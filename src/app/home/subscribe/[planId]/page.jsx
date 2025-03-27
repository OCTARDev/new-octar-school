import React from 'react'
import SubscribeForm from '../_components/SubscribeForm';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

export default async function SubscribeToPlan({params}) {
    const {planId} = await params;
    
  return (
    <div>
        <div className='max-w-screen-xl mx-auto px-2 flex flex-col gap-4 py-10'>
            <Link className='flex gap-2 items-center hover:text-primaryA1 font-semibold' href={"/home/pricing"}>
                <FaArrowLeft />
                <span>Cancel</span>
            </Link>
            <p className='text-gray-600 font-semibold'>Subscribe to year Individual plan</p>
            <SubscribeForm planId={planId}/>
        </div>
    </div>
  )
}
