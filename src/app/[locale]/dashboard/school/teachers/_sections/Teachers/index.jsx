"use client";
import SearchBar from '@/components/Searchbar';
import React, { useState } from 'react'
import TeachersTableSection from '../IndexTable';
import useIndexTeachers from '@/tanstack-query/School/Teachers/useIndex';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function TeacherSection() {
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  };

  const {data,isLoading,isError,error,isSuccess} = useIndexTeachers({page,search});
  
  return (
    <div>
      <div className='flex gap-4 mb-10'>
        <SearchBar handleSearch={handleSearch}/>
      </div>
      <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
        <TeachersTableSection 
        setPage={setPage}
        dashboard={data?.data}
        />
      </ErrorBoundary>
    </div>
  )
}
