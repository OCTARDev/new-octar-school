import Link from 'next/link';
import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";
export default function PlanCard({p}) {
  return (
    <div className='border rounded-lg flex flex-col gap-4 py-3'>
        <p className='font-bold text-lg px-3'>{p?.title}</p>
        <p className='px-3'>
            <span className='font-extrabold leading-loose text-4xl'>${p?.price} </span>
            <sub className='font-semibold capitalize'>{p?.period}</sub>
        </p>
        <p className='text-gray-600 flex gap-2 text-sm font-semibold px-3'>
            <span>No. Seats</span>
            <span>{p?.number_sets}</span>
        </p>
        <p className='text-gray-600 flex gap-2 text-sm font-semibold capitalize px-3'>
            <span>Type Of Plan:</span>
            <span>{p?.type}</span>
        </p>
        <div className='px-3'>
            <Link href={`/home/subscribe/${p?.id}`} className='btn btn-secondary'>Subscribe Now</Link>
        </div>
        <hr className=''/>
        <div className='px-3 flex flex-col'>
            <h2 className='font-semibold mb-2'>Features</h2>
            
            {p?.details?.map((l,i)=>{
                return(
                    <p key={i} className='px-2 flex gap-2 text-sm mb-2'>
                        <FaRegCircleCheck className='text-primaryA1' size={20}/>
                        <span>{l}</span>
                    </p>
                )
            })}
        </div>
        <hr/>
        <div className='px-3'>
            <h4 className='font-semibold mb-2'>Levels</h4>
            {p?.levels_arr?.map((l,i)=>{
                return(
                    <p key={i} className='px-2 flex gap-2 text-sm my-1'>
                        <FaRegCircleCheck className='text-primaryA1' size={20}/>
                        <span>{l.title}</span>
                    </p>
                )
            })}
        </div>
    </div>
  )
}
