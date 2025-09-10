import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import placeholderImg from "@/assets/home/hero.png";
import { FaStar } from 'react-icons/fa';
import RatingComponent from '@/components/Rating';
import useRateTeacherPortalLesson from '@/tanstack-query/Home/Teacher-Portal/Plan/useRate';


export default function PlanTeachersSection({data}) {
  console.log(data);
  const rate = useRateTeacherPortalLesson({});
  const handleRate = (star,id)=>{
    rate.mutate({
      rate:star,
      teacher_plan_id:id
    })
  }
  return (
    <section className='max-w-6xl mx-auto px-4 my-10'>
        <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        pagination={{ clickable: true  }}
        modules={[Pagination]}
        className="mb-4"
        breakpoints={{
          320:{slidesPerView:1},
          640:{slidesPerView:1.5},
          1024:{slidesPerView:2.5}
        }}
        >
        {data?.map((item, i) => (
            <SwiperSlide key={i} className='mb-4'>
            <div className="py-4 px-12 rounded-xl shadow border flex items-center justify-center gap-4  w-fit">
                <div className='flex-shrink-0'>
                  <Image 
                  width={128}
                  height={128}
                  className='h-32 w-32  rounded-full'
                  src={item?.teacher?.media_path}
                  alt={item?.teacher?.name}
                  />
                </div>
                <div className='text-center flex-grow'>
                  <h3 className='text-lg font-bold'>{item?.teacher?.name}</h3>
                  <p className='font-semibold text-gray-400 text-sm'>{item?.teacher?.school_name}</p>
                  <div className="flex justify-center mt-2 gap-1 text-xl">
                    <RatingComponent 
                    rate={item?.rate}
                    handleRate={handleRate}
                    id={item?.id}
                    />
                  </div>
                </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </section>
  )
}
