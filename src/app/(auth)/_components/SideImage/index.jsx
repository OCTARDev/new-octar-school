import React from 'react'
import authImage from "../../../../assets/auth/auth_upscaled.png";
import Image from 'next/image'

export default function SideImageComponent() {
  return (
    <aside className='bg-gray-200/80 sm:rounded-l-[50px] flex items-center justify-center max-w-full'>
        <Image
        src={authImage}
        alt='Students at graduation ceremony'
        className='aspect-square max-h-screen'
        />
    </aside>
  )
}
