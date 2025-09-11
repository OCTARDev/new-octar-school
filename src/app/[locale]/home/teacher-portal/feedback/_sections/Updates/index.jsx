import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from 'next/image';

export default function FeedbackUpdatesSection({data}) {
  return (
    <section className='max-w-6xl mx-auto px-4 my-10'>
        <h2 className='text-center text-3xl font-bold mb-8'>Latest OCTAR Updates</h2>
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ clickable: true  }}
                modules={[Pagination]}
                className="mb-4 "
                breakpoints={{
                320:{slidesPerView:1},
                640:{slidesPerView:1.5},
                1024:{slidesPerView:3}
                }}
                >
                {data?.map((item, i) => (
                    <SwiperSlide key={i} className='mb-4 py-2 px-1 !h-auto'>
                    <div className='shadow-sm  rounded-lg px-6 pt-3 pb-6  ring-2 ring-primaryA1 hover:shadow-2xl transition-shadow duration-400 space-y-3 !h-full'>
                        <div>
                            <Image 
                            width={400}
                            height={400}
                            quality={100}
                            alt={item?.title}
                            src={item?.media}
                            className='w-full aspect-square rounded-lg object-cover'
                            />
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold text-primaryA1'>{item?.title}</h4>
                            <p className='text-sm text-gray-600'>{item?.description}</p>
                            <p className='text-sm text-gray-400 mt-3'>{item?.last_update}</p>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}
