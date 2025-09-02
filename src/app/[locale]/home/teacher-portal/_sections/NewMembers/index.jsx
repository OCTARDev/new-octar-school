import React from 'react'
import { FaPlay } from 'react-icons/fa'

export default function NewMembersSection() {
  return (
    <div className='max-w-6xl mx-auto w-full'>
        <h2 className='font-bold text-3xl text-center mb-6'>For New Members</h2>
        <div className='bg-gradient-primary p-3 w-full h-full rounded-2xl  aspect-video flex items-center justify-center'>
            <FaPlay  className='text-white text-[140px]'/>
        </div>
    </div>
  )
}
