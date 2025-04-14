import Pagination from '@/components/Pagination'
import ResponsiveTable from '@/components/Table'
import React from 'react'
import catalog from "@/assets/dashboard/school/home/catalog.svg";
import pdficon from "@/assets/dashboard/school/home/pdf.svg";
import { AiOutlineUserAdd } from 'react-icons/ai';
import Image from 'next/image';
import { LuUsersRound } from 'react-icons/lu';
import { FaRegEdit, FaTrash } from 'react-icons/fa';


export default function HomeTableSection({dashboard,setPage,page}) {
    const classes = dashboard?.classes;
    
  return (
    <section>
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4'>
            {/* header */}
            <div className='flex justify-between px-4'>
                <span>Active Classes</span>
                <span>View All</span>
            </div>
            {/* table */}
            <div className='border rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
              <tr className='text-sm text-[#424242]'>
                <th className="px-4 py-2 text-start">ID</th>
                <th className="px-4 py-2 text-start">Class Name</th>
                <th className="px-4 py-2 text-start">Level</th>
                <th className="px-4 py-2 text-start">Teachers Count</th>
                <th className="px-4 py-2 text-start">Students Count</th>
                <th className="px-4 py-2 text-start">Actions</th>
              </tr>
            </thead>
            <tbody>
                {classes?.data?.map((row,i)=>{
                    return(
                        <tr
                            key={i}
                            className="border-b last:border-none hover:bg-gray-50 font-semibold text-[#414141] text-sm even:bg-[#EDEEFA]"
                            >
                            <td className="px-4 py-2 space-x-2">{row?.id}</td>
                            <td className="px-4 py-2 space-x-2">
                                <div className='flex gap-1 items-center'>
                                    <span><Image src={row?.media_path} width={32} height={32} alt={row?.name} className='w-8 h-8'/></span>
                                    <span>{row?.name}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2 space-x-2">
                                {row?.level}
                            </td>
                            <td className="px-4 py-2  space-x-2">
                                <div className='flex items-center gap-2'>
                                    <span>{row?.teachers_count} Teachers</span>
                                </div>
                            </td>

                            <td className="px-4 py-2   space-x-2">
                                <div className='flex items-center gap-2'>
                                    <span>{row?.students_count} Students</span>
                                </div>
                            </td>
                            <td className="px-4 py-2  space-x-2">
                                <div className='flex items-center gap-2'>
                                    
                                    <button
                                    className=""
                                    title="Edit"
                                    /* onClick={()=>handleOpenModal(row._id)} */
                                    >
                                    <FaRegEdit size={18} className='text-[#414141] hover:text-primaryA2'/>
                                    </button>
                                    <button
                                    title="Delete"
                                    /* onClick={()=>handleOpenModal(row._id)} */
                                    >
                                    <FaTrash size={18} className='text-[#414141] hover:text-statusError/80'/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
                </ResponsiveTable>
            </div>
            {/* pagination */}
            <Pagination totalPages={classes?.total_pages} currentPage={classes?.current_page} onPageChange={setPage} />
        </div>
    </section>
  )
}
