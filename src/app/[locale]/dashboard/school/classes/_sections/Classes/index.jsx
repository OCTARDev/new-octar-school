"use client";
import SearchBar from '@/components/Searchbar';
import React, { useState } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary';
import ClassesTableSection from '../IndexTable';
import useIndexClasses from '@/tanstack-query/School/Classes/useIndex';
import { useTranslations } from 'next-intl';

export default function ClassSection() {
  const t = useTranslations("dashboard.school.classes.classTable");
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  };

  const {data,isLoading,isError,error,isSuccess} = useIndexClasses({page,search});
  
  return (
    <div>
      <div className='flex gap-4 mb-10'>
        <SearchBar 
        handleSearch={handleSearch}
        placeholder={t("searchPlaceholder")}
        />
      </div>
      <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <ClassesTableSection
        setPage={setPage}
        dashboard={data?.data}
        />
      </ErrorBoundary>
    </div>
  )
}
