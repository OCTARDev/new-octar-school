import React from 'react'

export default function PopPage({children, isExpanded ,handleCloseModal }) {
  return (
    <div className={`fixed w-screen h-screen inset-0 z-10  flex justify-center items-center capitalize ${!isExpanded? "hidden " :""}`}>
      <div className='w-full h-full absolute z-20 bg-black opacity-40' onClick={handleCloseModal}></div>
      <div className={` bg-white shadow-2xl rounded-lg w-3/6 flex-col gap-4 px-4 py-6 absolute  z-30 ${isExpanded?"flex":"hidden"}`}>
      {children}

      </div>
    </div>
  )
}
