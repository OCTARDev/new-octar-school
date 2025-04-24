import ResponsiveTable from '@/components/Table'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function ClassesTableSection({dashboard}) {
      const t = useTranslations("dashboard.teacher.classes.classTable");
    const classes = dashboard;    
  return (
    <section>
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4 mb-4'>
            {/* table */}
            <div className=' rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
              <tr className='text-sm text-[#424242]'>
                <th className="px-4 py-2 text-start">{t("id")}</th>
                <th className="px-4 py-2 text-start">{t("name")}</th>
                <th className="px-4 py-2 text-start">{t("students")}</th>

                <th className="px-4 py-2 text-start">{t("actions")}</th>
              </tr>
            </thead>
            <tbody>
                {classes?.map((row,i)=>{
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
                                <span>{row?.count_students}</span>
                                <span>Students</span>
                                
                            </td>
                            {/* actions */}
                            <td className="px-4 py-2  space-x-2">
                                <div className='flex items-center gap-4'>
                                    <Link
                                    className=""
                                    title="Show"
                                    href={`students/${row?.id}`}
                                    >
                                    <FaEye size={18} className='text-[#414141] hover:text-primaryA2'/>
                                    </Link>
                                    
                                    
                                    
                                    
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
        
    </section>
  )
}
