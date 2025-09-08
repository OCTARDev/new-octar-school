import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PlanCardComponent({data}) {
  return (
    <Link href={`plan/${data?.id}`} className='shadow-md hover:shadow-2xl transition-shadow duration-200  rounded-3xl'>
        <div className='border rounded-3xl py-8 px-5  flex flex-col gap-4 bg-gradient-primary'>
            {/* Title */}
            <div className='w-full rounded-lg bg-white capitalize font-bold text-lg text-center py-4 px-2'>
                {data?.title}
            </div>
            {/* Image */}
            <div className='bg-white rounded-lg'>
                <Image 
                width={240} 
                height={280} 
                className='w-full h-72 object-cover rounded-lg' 
                src={data?.cover}
                alt={data?.title}
                />
            </div>
            
        </div>
        <div className='p-4'>
            <h4 className='font-bold text-lg'>{data?.grade}</h4>
            <p className='text-gray-800 text-sm'>{data?.description}</p>
        </div>
    </Link>
  )
}
