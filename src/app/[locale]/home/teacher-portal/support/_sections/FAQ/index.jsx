import DropContainer from '@/components/DropContainer'
import React from 'react'

export default function SupportFAQSection({data}) {
  return (
    <section className='space-y-5 mx-auto max-w-6xl px-4'>
        <div className='text-center space-y-2'>
            <h2 className='font-bold text-3xl'>Frequently Asked Questions</h2>
            <p className='text-sm text-gray-600 font-semibold'>Everything you need to know, simply answered.</p>
        </div>
        {/* FAQS */}
        <div className='space-y-3'>
            {data?.map((d)=>{
                return(
                    <div key={d?.id} className='py-6 px-4 border rounded-lg capitalize '>
                        <DropContainer title={d?.title}>
                            <div className='text-gray-600'>
                                {d?.description}
                            </div>
                        </DropContainer>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
