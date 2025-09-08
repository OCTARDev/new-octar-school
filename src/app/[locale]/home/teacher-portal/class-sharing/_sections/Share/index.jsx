import React from 'react'
import ShareCardComponent from '../Card';
import Pagination from '@/components/Pagination';

export default function ShareSection({data, page, setPage}) {
    return (
        <div className='flex flex-col gap-6'>
            <div className='capitalize'>
                <h2 className='text-4xl font-bold mb-4'>Topic Series</h2>
                {/* Placeholder for shared classes content */}
                <p>Join ongoing sharing threads or start a new one to inspire others.</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    data?.data?.map((d)=>{
                        return(
                            <ShareCardComponent data={d} key={d.id}/>
                        )
                    })
                }
            </div>
            <Pagination onPageChange={setPage} currentPage={page} totalPages={data?.total_pages}/>
        </div>
    )
}
