import Pagination from '@/components/Pagination';
import ResponsiveTable from '@/components/Table';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ShowTableSection({ dashboard }) {
    const t = useTranslations("dashboard.school.teachers.showTable");

    return (
        <section>
            <div className='border-2 rounded-lg p-3 flex flex-col gap-4'>
                {/* table */}
                <div className='rounded-lg py-2'>
                    <ResponsiveTable>
                        <thead>
                            <tr className='text-sm text-[#424242]'>
                                <th className="px-4 py-2 text-start">{t("classId")}</th>
                                <th className="px-4 py-2 text-start">{t("className")}</th>
                                <th className="px-4 py-2 text-start">{t("totalStudents")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dashboard?.map((row, i) => {
                                return (
                                    <tr
                                        key={i}
                                        className="border-b last:border-none hover:bg-gray-50 font-semibold text-[#414141] text-sm capitalize even:bg-primaryA3"
                                    >
                                        <td className="px-4 py-2 space-x-2">{row?.id}</td>
                                        <td className="px-4 py-2 space-x-2">
                                            {row?.title}
                                        </td>
                                        <td className="px-4 py-2 space-x-2">
                                            <span>{row?.students_count}</span>
                                            <span>{t("students")}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </ResponsiveTable>
                </div>
            </div>
        </section>
    );
}
