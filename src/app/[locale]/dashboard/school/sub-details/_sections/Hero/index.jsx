import React from 'react'
import { MdSubscriptions } from 'react-icons/md'

export default function SubHeroSection() {
  return (
    <section className='flex gap-3 items-center'>
        <span className='bg-primaryA3 rounded-full'><MdSubscriptions   size={22}/></span>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>Subscription details</h1>
    </section>
  )
}
