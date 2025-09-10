import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoDownload } from 'react-icons/go';
import Image from 'next/image';

export default function ResourcesReadySection({data}) {
    console.log(data);
    
  return (
    <section className='max-w-6xl mx-auto px-4 space-y-8'>
        <div>
            <h2 className='text-3xl font-bold mb-3'>Ready-To-Use Resources</h2>
            <p>Download posters, worksheets, and parent flyers to use in your classroom instantly</p>
        </div>
        <div>
        <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        pagination={{ clickable: true  }}
        modules={[Pagination]}
        className="mb-4  overflow-x-hidden"
        breakpoints={{
          320:{slidesPerView:1},
          640:{slidesPerView:1.5},
          1024:{slidesPerView:2.5}
        }}
        >
        {data?.map((item, i) => (
            <SwiperSlide key={item.id} className='mb-4 '>
            <div className="border p-2 shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className=' w-full  flex items-center justify-center border rounded-lg mb-3'>
                <Image 
                src={item?.cover}
                width={400}
                height={600}
                quality={100}
                alt={item?.title}
                className='w-full h-full rounded-lg'
                />
              </div> 
                
              <div className='px-4 pb-6 space-y-2 capitalize'>
                  <h4 className='font-bold text-lg'>{item?.title}</h4>
                  <p>{item?.description}</p>
                  <a className='btn btn-primary w-fit flex items-center gap-4' href={item?.file} target='_blank'>
                      <span><GoDownload size={20}/></span>
                      <span>Download</span>
                  </a>
              </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
        </div>
    </section>
  )
}
