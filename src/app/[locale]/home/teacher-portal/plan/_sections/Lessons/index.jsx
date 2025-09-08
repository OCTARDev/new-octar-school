"use client";
import React, { useMemo, useState } from 'react';

import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import PlanFilterSection from '../Filter';
import useIndexTeacherPortalPlanLessons from '@/tanstack-query/Home/Teacher-Portal/Plan/useIndex';
import Pagination from '@/components/Pagination';
import PlanCardComponent from '../Card';
import useDebounce from '@/utils/DebounceHook';

export default function PlanLessonsSection() {
    // State for selected values
    const [search,setSearch] = useState("");
    const debouncedSearch = useDebounce({value:search,delay:500});
    const [page,setPage] = useState(1);
    const [selectedGrade, setSelectedGrade] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedCurriculum, setSelectedCurriculum] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const params = {
        grade_id:selectedGrade?.id,
        level_id:selectedLevel?.id,
        curriculum_id:selectedCurriculum?.id,
        category_id:selectedCategory?.id,
        page,search:debouncedSearch
    };
    
    const {data,...methods} = useIndexTeacherPortalPlanLessons(params);
    const response = data?.data?.data;
    console.log(response);
    
    return (
        <div className='flex flex-col gap-6'>
            <PlanFilterSection 
            setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}
            selectedGrade={selectedGrade} setSelectedGrade={setSelectedGrade}
            selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel}
            selectedCurriculum={selectedCurriculum} setSelectedCurriculum={setSelectedCurriculum}
            setSearch={setSearch}
            />
            <ErrorBoundary {...methods}>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {response?.data?.map((d)=>{
                        return(
                            <PlanCardComponent data={d} key={d?.id}/>
                        )
                    })}
                </div>
                <Pagination 
                totalPages={response?.total_pages}
                onPageChange={setPage}
                currentPage={page}
                />
            </ErrorBoundary>
        </div>
    )
}
