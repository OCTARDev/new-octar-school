import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {motion} from "framer-motion";
import { GoDownload } from 'react-icons/go';

const parentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -40 }
};

export default function SupportPDFSection({data}) {
    
  return (
    <motion.section 
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
      className='max-w-6xl mx-auto px-4 my-10'
        >
        <Swiper
        slidesPerView={1}
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
            <SwiperSlide key={item.id} className='mb-4 '>
            <div className="shadow p-2 border rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className=' w-full  flex items-center justify-center border rounded-lg'>
                <iframe 
                  src={`${item?.file_media}#toolbar=0&navpanes=0`} 
                  width="100%" 
                  height="400px" 
                  title="PDF"
                  />
              </div> 
                
              <div className='px-4 pb-6 space-y-2 capitalize'>
                  <h4 className='font-bold text-lg'>{item?.title}</h4>
                  <p>{item?.description}</p>
                  <a className='btn btn-primary w-fit flex items-center gap-4' href={item?.file_media} target='_blank'>
                      <span><GoDownload size={20}/></span>
                      <span>Download</span>
                  </a>
              </div>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    </motion.section>
  )
}
