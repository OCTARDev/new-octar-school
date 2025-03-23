"use client";

import React from 'react'

export default function Input({placeholder,id,register,icon,type,errors}) {
    return (
        <>
        <div className="input-control">
            <span className="">
                {icon}
            </span>
            <input
                type={type}
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
