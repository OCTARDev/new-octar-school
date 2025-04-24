"use client";
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeachers from '@/tanstack-query/School/Teachers/useShow';
import React from 'react';
import ShowTableSection from '../ShowTable';
import { useTranslations } from 'next-intl';

export default function ShowTeacherSection({ id }) {
    const t = useTranslations("dashboard.school.teachers.show");
    const { data, isLoading, isSuccess, isError, error } = useShowTeachers({ id });
    const teacher = data?.data?.data;

    return (
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
            <div className='flex flex-col gap-8 capitalize'>
                <div className='flex gap-4 items-center font-bold text-xl '>
                    <span className=''>
                        <img
                            src={teacher?.media_path}
                            width={56}
                            height={56}
                            alt={teacher?.name}
                            className='object-contain w-14 h-14 rounded-full'
                        />
                    </span>
                    <span>{teacher?.name}</span>
                </div>
                <div className='flex flex-col gap-4 font-semibold md:w-3/6'>
                    <p className='grid grid-cols-2'>
                        <span>{t("id")}</span>
                        <span>{teacher?.id}</span>
                    </p>
                    <p className='grid grid-cols-2'>
                        <span>{t("name")}</span>
                        <span>{teacher?.name}</span>
                    </p>
                    <p className='grid grid-cols-2 '>
                        <span>{t("email")}</span>
                        <span className='lowercase'>{teacher?.email}</span>
                    </p>
                    <p className='grid grid-cols-2'>
                        <span>{t("status")}</span>
                        <span>{teacher?.status}</span>
                    </p>
                    <p className='grid grid-cols-2'>
                        <span>{t("classesCount")}</span>
                        <span>{teacher?.classes_count}</span>
                    </p>
                </div>
                <ShowTableSection dashboard={teacher?.classes} />
            </div>
        </ErrorBoundary>
    );
}
