"use client";

import React from 'react'

export default function TextArea({placeholder,id,register,icon,errors,rows=4}) {
    return (
        <>
        <div className="input-control">
            <span className="">
                {icon}
            </span>
            <textarea
                rows={rows}
                placeholder={placeholder}
                id={id}
                {...register(id)}
                className="p-3 w-full"
            />
        </div>
        {
            errors[id] &&
            <p className='text-statusError text-sm'>{errors[id].message}</p>
        }
        </>
    )
}
