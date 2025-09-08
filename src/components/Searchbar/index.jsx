import React from 'react'
import { CiSearch } from 'react-icons/ci'

export default function SearchBar({handleSearch,placeholder="Search for a student by ID or E-mail"}) {
  return (
    <div className='flex flex-wrap   gap-3 items-center flex-grow'>
        <div className='relative flex items-center gap-2 border px-2  rounded-md bg-primaryA4/50 flex-grow'>
            <label htmlFor='search' className='hover:cursor-pointer'><CiSearch size={24} color='#8788A8'/></label>
            <input 
            id='search'  
            type='text' 
            placeholder={placeholder} 
            className='min-w-20 lg:w-40 flex-grow bg-transparent px-1 rounded-lg py-2' 
            onChange={(e)=>handleSearch(e)}/>
        </div>                    
    </div>
  )
}
