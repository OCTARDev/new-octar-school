import React from 'react'

export default function TitleSection({data}) {
  return (
    <section className='w-full py-6 px-6 bg-gradient-primary text-white font-semibold text-lg'>
        <div className='max-w-6xl mx-auto'>
            {data}
        </div>
    </section>
  )
}
