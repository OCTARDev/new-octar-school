"use client";
import SearchBar from '@/components/Searchbar';
import React, { useState } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary';
import ClassesTableSection from '../IndexTable';
import useIndexTeacherClasses from '@/tanstack-query/Teacher/Classes/useIndex';
import useHelpTeacherClasses from '@/tanstack-query/Teacher/Classes/useHelp';
import { useTranslations } from 'next-intl';

export default function ClassSection() {
  const t = useTranslations("dashboard.teacher.classes.classTable");
  const [search,setSearch] = useState("");
  const [levelId,setLEvelId] = useState("");
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  };

  const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,error:helpError,isSuccess:helpIsSuccess}  = useHelpTeacherClasses();
  const {data,isLoading,isError,error,isSuccess} = useIndexTeacherClasses({search,levelId});
  const classes = data?.data?.data;
  return (
    <div>
      <ErrorBoundary isLoading={helpIsLoading} isError={helpIsError} isSuccess={helpIsSuccess} error={helpError}>
      <div className='flex gap-4 mb-10 '>
        <SearchBar 
        handleSearch={handleSearch}
        placeholder={t("searchPlaceholder")}
        />
        <select 
        className='border rounded-lg p-2 capitalize'
        defaultValue={""} 
        onChange={(e)=>setLEvelId(e.target.value)}
        >
          <option value={""} >{t("allLevels")}</option>
        {helpData?.data?.data?.map((l,i)=>{
          return(
            <option 
            key={i} 
            value={l?.id}
            className='text-black'
            >
              {l?.title}
            </option>
          )
        }) }
        </select>
        
      </div>
      </ErrorBoundary>
      <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        {
          classes?.map((c,i)=>{
            return (
              <div key={i} className='flex flex-col gap-2 '>
                <h1 className='font-bold text-lg underline'>{c?.level_title}</h1>
                <ClassesTableSection
                dashboard={c?.class_rooms}
                />
              </div>
            )
          })
        }
        
      </ErrorBoundary>
    </div>
  )
}
