import React from 'react'

export default function Blog({blog}) {    
  return (
    <section className='col-span-1 md:col-span-3 flex flex-col gap-4'>
        <div className='w-full'>
            <img 
            src={blog?.media?.file_path}
            className='w-full object-cover rounded-lg'
            />
        </div>
        <h1 className='text-3xl font-bold'>{blog?.title}</h1>
        {
            blog?.blog_descriptions?.map((d)=>{
                return(
                    <div key={d.id} className='mt-6 flex flex-col gap-3'>
                        <h2 className='text-xl font-bold'>{d?.title}</h2>
                        <p>{d?.body}</p>
                    </div>
                )
            })
        }
    </section>
  )
}
