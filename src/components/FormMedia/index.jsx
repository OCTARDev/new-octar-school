import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange'
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

export default function FormMediaComponent({title,formTitle,placeholder,register,setImage,setValue,image,errors,isDeleteable=false,handleDelete}) {
  return (
    <div>
        <label className="block text-gray-700 font-semibold mb-2">{title}</label>
        <div className="border border-dashed border-gray-400 rounded p-4">
        <label className="cursor-pointer text-purple-500">
            <input
            type="file"
            accept="image/*"
            multiple
            {...register(formTitle)}
            className="hidden"
            onChange={(e)=>handleSingleFileChange(e,setImage,setValue,formTitle)}
            />
            <span className="block text-center">{placeholder}</span>
            
        </label>
        {errors[formTitle] && (
            <span className="text-red-500 text-sm">{errors[formTitle].message}</span>
        )}
        {
            image && 
            <div className="mt-4 grid grid-cols-3 gap-4">
                <div  className="relative">
                    <img
                    src={image}
                    alt={`Preview`}
                    className="w-full  object-cover rounded border"
                    />
                    {isDeleteable &&
                    <span className='absolute -top-5 -right-5 rounded-full  hover:cursor-pointer' onClick={handleDelete}>
                        <IoIosCloseCircle size={50} className='text-secondaryA1 hover:text-primaryA1'/>
                    </span>
                    }
                    
                </div>
            </div>
        }
        
        </div>
    </div>
  )
}