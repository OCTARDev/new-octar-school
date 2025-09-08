import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function PlanTeachersSection({data}) {
  return (
    <section className='max-w-6xl mx-auto px-4 my-10'>
        <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        pagination={{ clickable: true  }}
        modules={[Pagination]}
        className="mb-4"
        >
        {data.map((item, i) => (
            <SwiperSlide key={i} className='mb-4'>
            <div className="p-4 rounded-xl shadow border text-center">
                <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="font-bold mt-2">{item.name}</h3>
                <p>School: {item.school}</p>
                <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                    {index < item.stars ? "⭐" : "☆"}
                    </span>
                ))}
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
                View PDF
                </button>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </section>
  )
}
