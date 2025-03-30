import React from 'react'
import Card from '../Card'

export default function Aside({otherBlogs}) {
  return (
    <aside className='col-span-1 flex flex-col gap-3 text-center'>
        <h2 className='text-2xl font-bold text-primaryA1'>Other articles by the author</h2>
        <hr/>
        {otherBlogs?.map((c)=>{
            return(
            <Card c={c} key={c.id}/>
            )
        })}
    </aside>
  )
}
