import Image from 'next/image';
import React from 'react'
import chart1 from '@/assets/dashboard/school/home/chart.svg';
import chart2 from '@/assets/dashboard/school/home/chart2.svg';
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { LuUsersRound } from "react-icons/lu";
import { MdHomeFilled } from 'react-icons/md';

export default function HomeHeroSection({dashboard}) {
  return (
    <section className='flex flex-col gap-4 px-4'>
        <div className='flex gap-3 items-center'>
            <span className='bg-primaryA3 rounded-full'><MdHomeFilled size={22}/></span>
            <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Welcome to OCTAR</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {/* Total Teachers */}
            <div className='p-5 border-2 rounded-lg flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center font-semibold gap-2'>
                        <AiOutlineUserAdd size={34} className='p-1 border-2 rounded-lg'/>
                        <span>Total Curriculum</span>
                    </div>
                </div>
                <div className='flex gap-2 items-end'>
                    <span className='text-3xl font-bold flex-grow'>{dashboard?.count_curriculum}</span>
                    <Image src={chart1} alt="Chart" className='w-full'/>
                </div>
            </div>
            {/* Total Students */}
            <div className='p-5 border-2 rounded-lg flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center font-semibold gap-2'>
                        <LuUsersRound size={34} className='p-1 border-2 rounded-lg'/>
                        <span>Total Students</span>
                    </div>
                </div>
                <div className='flex gap-2 items-end'>
                    <span className='text-3xl font-bold flex-grow'>{dashboard?.count_students}</span>
                    <Image src={chart2} alt="Chart" className='w-full'/>
                </div>
            </div>
            {/* Active Classes */}
            <div className='p-5 border-2 rounded-lg flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center font-semibold gap-2'>
                        <CiMonitor size={34} className='p-1 border-2 rounded-lg'/>
                        <span>Active Classes</span>
                    </div>
                </div>
                <div className='flex gap-2 items-end'>
                    <span className='text-3xl font-bold flex-grow'>{dashboard?.count_classes}</span>
                    <Image src={chart1} alt="Chart" className='w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}
