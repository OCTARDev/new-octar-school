import React from 'react'
import { motion } from 'framer-motion';

export default function Card({c}) {
  return (
    <motion.div 
      transition={{duration: 0.3}}
      className='flex flex-col items-center gap-2 w-full'
      whileHover={{ scale: 1.02 }}
      > 
        <div className='w-full px-2 py-3 flex flex-col gap-2 items-center border-2 rounded-lg capitalize'>
            <img 
            src={c?.media_path} 
            className='max-w-full  h-48 object-cover'
            />
            <p className='font-bold text-xl'> {c?.title}</p>
        </div>
    </motion.div>
  )
}
