import React from 'react'
import { GoDotFill } from "react-icons/go";

export default function HomeSubsSection({dashboard}) {
  return (
    <div>
        <div className='flex flex-col gap-3'>
            <h2 className='text-4xl font-bold capitalize'>Current subscription plan</h2>
            <div className='w-full bg-primaryA3 rounded-lg p-5 capitalize flex flex-col gap-6'>
                {/* header */}
                <div className='flex justify-between items-center gap-1'>
                    <div className='flex gap-2 items-center'>
                        <span>Individual plan</span>
                        <div className={`flex items-center font-semibold ${dashboard?.subscription ? "text-statusSuccess" :"text-statusError"} `}>
                            <GoDotFill />
                            {
                            dashboard?.subscription ?
                            <span className='text-sm'>Active</span> :
                            <span className='text-sm'>InActive</span>
                            }
                        </div>
                    </div>
                    <span className='text-primary-dark underline hover:cursor-pointer hover:text-primaryA1'>Change Plan</span>
                </div>
                {/* middle */}
                {
                dashboard?.subscription &&
                <div className='flex flex-col gap-1 mt-1'>
                    <div className='flex gap-2 items-end'>
                        <p className='text-4xl font-bold uppercase flex gap-1'>
                            <span>{dashboard?.subscription?.price}</span>
                            <span>{dashboard?.subscription?.currency}</span>
                        </p>
                        <span className='text-grey-light'>{dashboard?.subscription?.period}</span>
                    </div>
                    <span>{dashboard?.subscription?.num_seats} seat plan</span>
                    <span>Renew subscription date: {dashboard?.subscription?.renew_subscription_date}</span>
                    <span className='underline text-[#4B5768]'>Terms Apply</span>
                </div>
                }
                
                <div className='flex justify-end'>
                    <button className='btn btn-primary '>
                        Upgrade
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
