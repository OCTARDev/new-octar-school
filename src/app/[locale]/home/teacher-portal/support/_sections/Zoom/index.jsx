import React from 'react'
import { BsFillCameraVideoFill } from "react-icons/bs";
import img from "@/assets/home/teacher-portal/support/support-meeting.png";
import Image from 'next/image';


export default function ZoomMeetingSection({data}) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10 max-w-6xl mx-auto px-4'>
        {/* Left */}
      <div className='space-y-3'>
        <h2 className='font-bold text-3xl'>Zoom Meetings With The OCTAR Team</h2>
        <p>Connect directly with our experts to solve issues and answer your questions</p>
        <a 
        target='_blank'
        href={data}
        className='btn btn-primary flex items-center gap-4 w-fit'>
            <span><BsFillCameraVideoFill size={20}/></span>
            <span>Join</span>
        </a>
      </div>
      {/* Right */}
      <div>
        <Image 
        width={600}
        height={600}
        alt='Zoom Meeting Image'
        src={img}
        className='w-full h-full object-cover'
        />
      </div>
    </section>
  )
}
