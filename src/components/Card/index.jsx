import React from 'react'

export default function Card({c}) {
  return (
    <div className='flex flex-col items-center gap-2 w-full'> 
        <div className='w-full px-2 py-3 flex flex-col gap-2 items-center border-2 rounded-lg capitalize'>
            <img 
            src={c?.media_path} 
            className='max-w-full h-48 object-cover'
            />
            <p className='font-bold text-xl'> {c?.title}</p>
        </div>
    </div>
  )
}
