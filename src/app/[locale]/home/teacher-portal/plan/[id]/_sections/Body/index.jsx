import Image from 'next/image'
import React from 'react'

export default function BodySection({body,image,download}) {
  return (
    <section className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-7 my-10 items-center px-4 gap-4'>
      <div className='md:col-span-5 flex flex-col gap-4'>
        <p>{body}</p>
        <a className='btn btn-primary w-fit' href={download} target='_blank'>Download</a>
      </div>
      <div className='md:col-span-2'>
        <Image 
        width={300} 
        height={700} 
        className='w-full h-full object-cover rounded-lg' 
        src={image} 
        alt='Post Image'
        />
      </div>
    </section>
  )
}
