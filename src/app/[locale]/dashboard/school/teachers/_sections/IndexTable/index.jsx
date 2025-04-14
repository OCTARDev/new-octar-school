import Pagination from '@/components/Pagination'
import ResponsiveTable from '@/components/Table'
import React, { useState } from 'react'
import Image from 'next/image';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import ConfirmDelete from '@/components/ConfirmDelete';
import useDeleteTeacher from '@/tanstack-query/School/Teachers/useDelete';
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import ConfirmRestore from '@/components/ConfirmRestore';
import useRestoreTeacher from '@/tanstack-query/School/Teachers/useRestore';

export default function TeachersTableSection({dashboard,setPage,page}) {
    const classes = dashboard?.data;
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
    const deleteTeacher = useDeleteTeacher({});
    const handleDeleteRequest =()=>{
        deleteTeacher.mutate(selectedId);
    }
    const restoreTeacher = useRestoreTeacher({});
    const handleRestoreRequest = ()=>{
        restoreTeacher.mutate(selectedId);
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
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4 mb-4'>
            {/* table */}
            <div className=' rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
              <tr className='text-sm text-[#424242]'>
                <th className="px-4 py-2 text-start">ID</th>
                <th className="px-4 py-2 text-start">Name</th>
                <th className="px-4 py-2 text-start">Class</th>
                <th className="px-4 py-2 text-start">Email Address</th>
                <th className="px-4 py-2 text-start">Actions</th>
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
                            <td className="px-4 py-2 space-x-2">
                                <div className='flex gap-1 items-center'>
                                    <span><Image src={row?.media_path} alt='catalog' width={32} height={32} /></span>
                                    <span>{row?.name}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2  space-x-2">
                                <span>{row?.classes_count}</span>
                                <span>Classes</span>
                                
                            </td>
                            <td className="px-4 py-2 space-x-2 lowercase">
                                {row?.email}
                            </td>
                            <td className="px-4 py-2  space-x-2">
                                <div className='flex items-center gap-4'>
                                    <Link
                                    className=""
                                    title="Show"
                                    href={`teachers/show/${row?.id}`}
                                    >
                                    <FaEye size={18} className='text-[#414141] hover:text-primaryA2'/>
                                    </Link>
                                    <Link
                                    className=""
                                    title="Edit"
                                    href={`teachers/edit/${row?.id}`}
                                    >
                                    <FaRegEdit size={18} className='text-[#414141] hover:text-primaryA2'/>
                                    </Link>
                                    {
                                        row?.status == "Active" ?
                                        (
                                    <button
                                    title="Delete"
                                    onClick={()=>handleOpenModal(row.id)}
                                    >
                                    <FaTrash size={18} className='text-[#414141] hover:text-statusError/80'/>
                                    </button>
                                        ):(
                                    <button
                                    title="Restore"
                                    onClick={()=>handleOpenRestoreModal(row.id)}
                                    >
                                    <MdOutlineSettingsBackupRestore  size={18} className='text-[#414141] hover:text-statusError/80'/>
                                    </button>
                                        )
                                    }
                                    
                                    
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
