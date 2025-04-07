import React, { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function DropContainer({state=false,children,title}) {
    const [isVisible,setIsVisible] = useState(state);
  return (
    <div>
      <div className='w-full flex justify-between items-center hover:cursor-pointer' onClick={()=>setIsVisible(!isVisible)}>
        <h1 className='font-bold text-lg mb-2'>{title}</h1>
        <FaChevronRight
          className={`transform transition-transform duration-300 ${isVisible ? "rotate-90" : "rotate-0"}`}
        />
      </div>
        {isVisible && children}
    </div>
  )
}
