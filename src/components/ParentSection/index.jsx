import React from 'react'

export default function ParentSection({children}) {
  return (
    <section className='py-5 px-4 bg-white rounded-md capitalize flex flex-col gap-5 opacity-95'>
        {children}
    </section>
  )
}
