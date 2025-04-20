import Pagination from '@/components/Pagination'
import ResponsiveTable from '@/components/Table'
import React, { useState } from 'react'
import ConfirmDelete from '@/components/ConfirmDelete';
import ConfirmRestore from '@/components/ConfirmRestore';
import { GoDotFill } from "react-icons/go";
import useDeleteClass from '@/tanstack-query/School/Classes/useDelete';
import useRestoreClass from '@/tanstack-query/School/Classes/useRestore';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function HistoryTableSection({dashboard,setPage}) {
    const classes = dashboard?.payment_history;
    const [isExpanded, setIsExpanded] = useState(false);
    const [restoreIsExpanded, setRestoreIsExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const handleOpenModal = (id) =>{
        setIsExpanded(true);
        setSelectedId(id);
      }
      const handleCloseModal = ()=>{
        setIsExpanded(false);
        setSelectedId(null);
      }
    const handleOpenRestoreModal = (id) =>{
        setRestoreIsExpanded(true);
        setSelectedId(id);
      }
      const handleCloseRestoreModal = ()=>{
        setRestoreIsExpanded(false);
        setSelectedId(null);
      }
    const deleteClass = useDeleteClass({});
    const handleDeleteRequest =()=>{
        deleteClass.mutate(selectedId);
    }
    const restoreClass = useRestoreClass({});
    const handleRestoreRequest = ()=>{
        restoreClass.mutate(selectedId);
    }
    
  return (
    <section>
        <ConfirmDelete
            isExpanded={isExpanded}
            handleCloseModal={handleCloseModal} 
            handleDeleteRequest={handleDeleteRequest} 
            id={selectedId}
        />
        <ConfirmRestore 
            isExpanded={restoreIsExpanded}
            handleCloseModal={handleCloseRestoreModal} 
            handleDeleteRequest={handleRestoreRequest} 
            id={selectedId}
        />
        <h1 className='my-4 font-bold text-xl capitalize'>Payment History</h1>
        {/* table */}
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4 mb-4'>
            <div className=' rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
                    <tr className='text-sm text-[#424242]'>
                        <th className="px-4 py-2 text-start">ID</th>
                        <th className="px-4 py-2 text-start">Title</th>
                        <th className="px-4 py-2 text-start">Subscription Plan</th>
                        <th className="px-4 py-2 text-start">Plan Type</th>
                        <th className="px-4 py-2 text-start">Duration</th>
                        <th className="px-4 py-2 text-start">Cost</th>
                        <th className="px-4 py-2 text-start">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {classes?.data?.map((row,i)=>{
                        return(
                            <tr
                                key={i}
                                className="border-b last:border-none hover:bg-gray-50 font-semibold text-[#414141] text-sm capitalize even:bg-[#EDEEFA]"
                                >
                                <td className="px-4 py-2 space-x-2 ">{row?.id}</td>
                                {/* Name */}
                                <td className="px-4 py-2 space-x-2">
                                    <div className='flex gap-1 items-center'>
                                        <span>{row?.title}</span>
                                    </div>
                                </td>
                                {/* Sub Plan */}
                                <td className="px-4 py-2 space-x-2">
                                    <span className='underline'>{row?.plan_type}</span>
                                </td>
                                {/* PLan Type */}
                                <td className="px-4 py-2  space-x-2">
                                    <span className='underline'>{row?.type}</span>                                
                                </td>
                                {/* Duration */}
                                <td className="px-4 py-2 space-x-2 uppercase text-[#505273] ">
                                    {row?.duration}
                                </td>
                                {/* cost */}
                                <td className="px-4 py-2 space-x-2 uppercase ">
                                    <span>{row?.price}</span>
                                    <span>{row?.currency}</span>
                                    
                                </td>
                                {/* Status */}
                                <td className="px-4 py-2  space-x-2">
                                    <div className='flex items-center gap-4'>
                                    <p className={`border rounded-lg px-2 py-1 flex items-center w-fit ${row?.status == "Paid" ? "border-statusSuccess" :"border-statusError"}`}>
                                        <GoDotFill  className={`${row?.status == "Paid" ? "text-statusSuccess" :"text-statusError"}`}/>
                                        <span >{row?.status}</span>
                                    </p>
                                    <IoMdCheckmarkCircleOutline size={22} className={`${row?.status == "Paid" ? "text-statusSuccess" :"text-statusError"}`}/>
                                        
                                        
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </ResponsiveTable>
            </div>
            {/* pagination */}
        </div>
        <Pagination totalPages={classes?.total_pages} currentPage={classes?.current_page} onPageChange={setPage} />
    </section>
  )
}
