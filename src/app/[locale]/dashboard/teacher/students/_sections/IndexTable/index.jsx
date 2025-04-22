"use client";
import ResponsiveTable from '@/components/Table'
import React, { useState } from 'react'
import Image from 'next/image';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import ConfirmDelete from '@/components/ConfirmDelete';
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import ConfirmRestore from '@/components/ConfirmRestore';
import { GoDotFill } from "react-icons/go";
import SearchBar from '@/components/Searchbar';
import useRestoreStudent from '@/tanstack-query/School/Students/useRestore';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useRouter } from 'next/navigation';
import useIndexTeacherStudents from '@/tanstack-query/School/Students/useIndex';
import useDeleteTeacherStudent from '@/tanstack-query/School/Students/useDelete';
import useRestoreTeacherStudent from '@/tanstack-query/School/Students/useRestore';


export default function StudentsTableSection({id}) {
    const [page,setPage] = useState(1);
    const [search ,setSearch] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const [restoreIsExpanded, setRestoreIsExpanded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const router = useRouter();

    const {data,isLoading,isError,error,isSuccess} = useIndexTeacherStudents({page,search,id});
    const students = data?.data?.data;


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
    const deleteStudent = useDeleteTeacherStudent({});
    const handleDeleteRequest =()=>{
        deleteStudent.mutate(selectedId);
    }
    const restoreStudent = useRestoreTeacherStudent({});
    const handleRestoreRequest = ()=>{
        restoreStudent.mutate(selectedId);
    }
    const redirectToNotes = (status,id)=>{
    if(!status) return;
        router.push(`/dashboard/teacher/students/notes/${id}`);
    };

  return (
    <section className='flex flex-col gap-4'>
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
        <div>
            <SearchBar setSearch={setSearch}/>
        </div>
        {/* table */}
        <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4 mb-4'>
            {/* table */}
            <div className=' rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
              <tr className='text-sm text-[#424242]'>
                <th className="px-4 py-2 text-start">ID</th>
                <th className="px-4 py-2 text-start">Student Name</th>
                <th className="px-4 py-2 text-start">Code</th>
                <th className="px-4 py-2 text-start">Status</th>
                <th className="px-4 py-2 text-start">Notes</th>

                <th className="px-4 py-2 text-start">Actions</th>
              </tr>
            </thead>
            <tbody>
                {students?.students?.map((row,i)=>{
                    return(
                        <tr
                            key={i}
                            className="border-b last:border-none hover:bg-gray-50 font-semibold text-[#414141] text-sm capitalize even:bg-[#EDEEFA]"
                            >
                            <td className="px-4 py-2 space-x-2 ">{row?.id}</td>
                            {/* Name */}
                            <td className="px-4 py-2 space-x-2">
                                <div className='flex gap-1 items-center'>
                                    <span><Image src={row?.media_path} alt='catalog' width={32} height={32} /></span>
                                    <span>{row?.name}</span>
                                </div>
                            </td>
                            {/* total students */}
                            <td className="px-4 py-2  space-x-2">
                                <span>{row?.code}</span>
                            </td>
                            {/* Status */}
                            <td className="px-4 py-2 space-x-2">
                                <p className={`border rounded-lg px-2 py-1 flex items-center w-fit ${row?.status == "Active" ? "border-statusSuccess" :"border-statusError"}`}>
                                    <GoDotFill  className={`${row?.status == "Active" ? "text-statusSuccess" :"text-statusError"}`}/>
                                    <span >{row?.status}</span>
                                </p>
                            </td>
                            {/* Notes Status */}
                            <td className="px-4 py-2 space-x-2  normal-case">
                                <button
                                disabled={!row?.notes_status}
                                onClick={()=>redirectToNotes(row?.notes_status,row?.id)}
                                title="View Notes"
                                className=
                                {`border rounded-lg px-2 py-1 flex items-center w-fit 

                                    ${row?.notes_status?
                                    "border-primaryA1 text-primaryA1 hover:bg-primaryA1 hover:text-white hover:cursor-pointer" :
                                    "bg-gray-300 text-gray-500"}
                                    `
                                }>
                                    <span >{row?.notes_status ? "Notes ":"No notes"}</span>
                                </button>
                            </td>
                            {/* actions */}
                            <td className="px-4 py-2  space-x-2">
                                <div className='flex items-center gap-4'>
                                    <Link
                                    className=""
                                    title="Edit"
                                    href={`edit/${row?.id}`}
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
        </ErrorBoundary>
        {/* pagination */}
        {/* <Pagination totalPages={students?.total_pages} currentPage={students?.current_page} onPageChange={setPage} /> */}
    </section>
  )
}
