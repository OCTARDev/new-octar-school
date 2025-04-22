"use client";
import useChangeTeacherPassword from '@/tanstack-query/Teacher/Profile/useChangePassword';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from "yup";


const passwordValidation = Yup.object().shape({
    old_password: Yup.string()
      .required("Old Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&]/, "Password must contain at least one special character"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
  
    password_confirmation: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

export default function UpdatePasswordSection() {
    const {handleSubmit,register,formState:{errors}} = useForm({resolver:yupResolver(passwordValidation)});
    const onSuccess = (data)=>{        
        toast.success(data?.data?.message ||"Password Changed Successfully")
    };
    const onError = (e)=>{
        console.log(e);
        
        toast.error(e?.response.data?.message || "Error Occurred");
    }
    const changePassword = useChangeTeacherPassword({onSuccess,onError});
    const t = useTranslations("dashboard.school.profile");
    const onSubmit = async(data)=>{
        changePassword.mutate(data);
    }
  return (
    <section className='rounded-lg border p-3 capitalize'>
        <h3 className='text-2xl font-bold mb-10'>{t("passwordHeader")}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'> 
            {/* old password */}
            <div className='input-container'>
                <label>{t("oldPassword")}</label>
                <input 
                    type='password'
                    {...register("old_password")}
                    placeholder={t("placeholderOldPassword")}
                />
            </div>
            {errors.old_password && 
            <p className='text-red-500 text-sm'>{errors?.old_password.message}</p>}
            {/* password */}
            <div className='input-container'>
                <label>{t("newPassword")}</label>
                <input 
                    type='password'
                    {...register("password")}
                    placeholder={t("placeholderNewPassword")}
                />
            </div>
            {errors.password && 
            <p className='text-red-500 text-sm'>{errors?.password.message}</p>}
            {/* confirm password */}
            <div className='input-container'>
                <label>{t("cPassword")}</label>
                <input 
                    type='password'
                    {...register("password_confirmation")}
                    placeholder={t("placeholderCPassword")}
                />
            </div>
            {errors.password_confirmation && 
            <p className='text-red-500 text-sm'>{errors?.password_confirmation.message}</p>}
            {/* Button */}
            <div className='flex justify-end'>
                <button 
                className='btn btn-primary'
                type='submit'
                >
                    {t("submit")}
                </button>
          </div>
        </form>
    </section>
  )
}
