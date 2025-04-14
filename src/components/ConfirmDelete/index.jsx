import React from 'react'
import PopPage from '../PopPage';


export default function ConfirmDelete({isExpanded,handleCloseModal,handleDeleteRequest,id}) {
    const handleDelete = ()=>{
        handleDeleteRequest(id);
        handleCloseModal();       
    }
  return (
    <PopPage isExpanded={isExpanded} handleCloseModal={handleCloseModal}>
        <div className='w-full h-full flex flex-col gap-4 justify-center items-center text-center'>
            <h1 className='text-2xl font-bold'>Are you sure you want to delete this Record?</h1>
            <div className='flex gap-4'>
            <button onClick={handleDelete} className='bg-red-500 text-white px-4 py-2 rounded-lg'>Yes</button>
            <button onClick={handleCloseModal} className='bg-green-500 text-white px-4 py-2 rounded-lg'>No</button>
            </div>
        </div>
    </PopPage>
  )
}
