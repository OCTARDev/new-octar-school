import React from 'react'
import {motion} from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -40 }
};
export default function SupportVideosSection({data}) {
  return (
    <motion.section 
        className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 px-4 max-w-6xl mx-auto'
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
    >
      {data?.map((d)=>{
        return(
            <div key={d?.id}>
                <div className='h-52 w-full  flex items-center justify-center border rounded-lg'>
                    <iframe
                        width="100%"
                        height="100%"
                        src={d?.video_url}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        )
      })}
    </motion.section>
  )
}
