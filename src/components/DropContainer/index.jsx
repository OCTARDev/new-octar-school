import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'

export default function DropContainer({state=false,children,title}) {
    const [isVisible,setIsVisible] = useState(state);
  return (
    <div className='transition-all duration-500'>
      <div className='w-full flex justify-between items-center hover:cursor-pointer' onClick={()=>setIsVisible(!isVisible)}>
        <h1 className='font-bold text-lg mb-2'>{title}</h1>
        <FaChevronRight
          className={`transform transition-transform duration-300 ${isVisible ? "rotate-90" : "rotate-0"}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="py-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
