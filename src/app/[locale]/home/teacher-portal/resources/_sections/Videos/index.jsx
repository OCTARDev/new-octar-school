import React from 'react'
import ResourcesVideosCardComponent from '../VideoCard';
import {motion } from "framer-motion";


const parentVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -40 }
};

export default function ResourcesVideosSection({data}) {
  return (
    <motion.section 
        variants={parentVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
      {
        data?.map((d)=>{
            return(
                <ResourcesVideosCardComponent data={d} key={d?.id}/>
            )
        })
      }
    </motion.section>
  )
}
