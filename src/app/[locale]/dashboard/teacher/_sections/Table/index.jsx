import Pagination from '@/components/Pagination'
import ResponsiveTable from '@/components/Table'
import React from 'react'
import Image from 'next/image';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { useTranslations } from 'next-intl';


export default function HomeTableSection({dashboard,setPage}) {
    const classes = dashboard?.class_rooms;
    const t = useTranslations("dashboard.teacher.home.classes");
  return (
    <section>
        <div className='border-2 rounded-lg p-3 flex flex-col gap-4'>
            {/* header */}
            <div className='flex justify-between px-4'>
                <span>{t("latest")}</span>
                <span>{t("viewAll")}</span>
            </div>
            {/* table */}
            <div className='border rounded-lg py-2'>
                <ResponsiveTable >
                <thead>
              <tr className='text-sm text-[#424242]'>
                <th className="px-4 py-2 text-start">{t("id")}</th>
                <th className="px-4 py-2 text-start">{t("className")}</th>
                <th className="px-4 py-2 text-start">{t("level")}</th>
                <th className="px-4 py-2 text-start">{t("teachersCount")}</th>
                <th className="px-4 py-2 text-start">{t("studentsCount")}</th>
                
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
                                    <span>{row?.teachers_count} {t("teachers")}</span>
                                </div>
                            </td>

                            <td className="px-4 py-2   space-x-2">
                                <div className='flex items-center gap-2'>
                                    <span>{row?.students_count} {t("students")}</span>
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
