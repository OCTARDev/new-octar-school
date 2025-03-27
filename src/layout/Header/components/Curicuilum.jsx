import React, { use } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import styles from "../styles.module.css";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import useFetchGrades from '@/tanstack-query/Home/Header/useFetchGrades';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

export default function CuricuilumComponent() {
  const {data,isError,isLoading,error,isSuccess} = useFetchGrades();
  const grades = data?.data?.data;  
  
  return (
    <ErrorBoundary isLoading={isLoading} isError={isError} error={error} isSuccess={isSuccess}>
    <div className={`${styles.giftMenu} flex flex-col md:flex-row  gap-8 px-4 py-6 rounded-lg shadow-md bg-neutral10 border border-neutral7`}>
      {grades?.map((grade,i)=>{
        return(
          <div className='flex flex-col gap-2 px-6 capitalize' key={grade.id}>
            <h4 className='text-nowrap font-bold'>{grade?.title}</h4>
            {
              grade?.levels?.map((g)=>{
                return (
                <Link 
                  href={`/home/curriculum/${g.id}`} 
                  className='text-nowrap nav-link hover:underline' 
                  key={g.id}
                  >
                    {g.title}
                </Link>
                )
                })
            }
          </div>
        )
      })}
    </div>
    </ErrorBoundary>
  )
}
