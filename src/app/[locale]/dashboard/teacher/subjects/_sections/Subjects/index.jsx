"use client";
import Card from '@/components/Card';
import ErrorBoundary from '@/components/ErrorBoundary';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import SearchBar from '@/components/Searchbar';
import useTeacherSubjectsHelp from '@/tanstack-query/Teacher/Subjects/useHelp';
import useIndexTeacherSubjects from '@/tanstack-query/Teacher/Subjects/useIndex';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function SubjectsSection() {
    const t = useTranslations('dashboard.teacher.subjects');
    const { setValue,watch} = useForm();
    const level_ids = watch("level_ids");
    const [search ,setSearch] = useState("");
    const {data,isLoading,isError,isSuccess,error} = useIndexTeacherSubjects({search,level_ids});
    const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,isSuccess:helpIsSuccess,error:helpError} = useTeacherSubjectsHelp();
    const helpResponse = helpData?.data?.data; 
    const response = data?.data?.data;
    const handleSearch = (search)=>{
    setSearch(search);
    };
    
  return (
    <div >
        <div className='flex gap-4 mb-10'>
            <SearchBar 
            handleSearch={handleSearch}
            placeholder={t("searchPlaceholder")}
            />
            <ErrorBoundary isLoading={helpIsLoading} isError={helpIsError} isSuccess={helpIsSuccess} error={helpError}>
                <MultiChoiceSelect 
                options={helpResponse}
                setValue={setValue}
                selectId={"level_ids"}
                placeholder={t("grades")}
                />
            </ErrorBoundary>
        </div>
        <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <div className='flex flex-col gap-4'>
        {
          response?.map((r,i)=>{
            return(
              <section key={r?.id} className='flex flex-col gap-4 px-4 py-3 border rounded-lg'>
                <h2 className='font-semibold text-lg'>{r?.title}</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {r?.curriculums?.map((curr)=>{
                    return(
                      <Link key={curr.id} href={`subjects/categories/${curr.id}`}>
                        <Card c={curr}/>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })
        }
        </div>
        </ErrorBoundary>
    </div>
  )
}
