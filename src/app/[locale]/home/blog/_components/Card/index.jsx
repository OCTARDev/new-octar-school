import Link from 'next/link'
import React from 'react'

export default function Card({c}) {
  return (
    <Link
    href={`/home/blog/single/${c.id}`}
    className='w-full px-2 py-3 flex flex-col gap-2 items-center rounded-lg overflow-hidden text-center capitalize' 
    >
        <img 
        src={c?.media?.file_path} 
        className='max-w-full h-48 object-cover w-full rounded-lg'
        />
        <h2 className='font-bold text-2xl'> {c?.title}</h2>
        <p className='text-gray-400 text-sm'>{c?.author}</p>
    </Link>
  )
}
