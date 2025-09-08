import React from 'react'
import { FaCrown } from 'react-icons/fa'
import ShareCardComponent from '../Card'

export default function HightlightSection({data}) {
  return (
    <div className='flex flex-col gap-6'>
            <div className='capitalize'>
                <div className='flex items-center gap-6 mb-4 text-4xl'>
                    <span><FaCrown className="text-[#FFBB33] " size={50} /></span>
                    <h2 className=' font-bold '>Highlighted creativity</h2>
                </div>
                
                {/* Placeholder for shared classes content */}
                <p>The most creative teachers' content</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    data?.map((d)=>{
                        return(
                            <ShareCardComponent data={d} key={d.id}/>
                        )
                    })
                }
            </div>
    </div>
  )
}
