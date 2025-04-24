"use client";
import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import {toast} from "react-toastify"
import  { useForm } from "react-hook-form"
import ParentSection from '@/components/ParentSection'
import ErrorBoundary from '@/components/ErrorBoundary';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useHelpClasses from '@/tanstack-query/School/Classes/useHelp';
import { useTranslations } from 'next-intl';
import useStoreClass from '@/tanstack-query/School/Classes/useStore';
import FormMediaComponent from '@/components/FormMedia';
import BackSection from '@/components/BackSection';



export default function AddClass() {
    const [image,setImage] = useState(null);
    const router = useRouter();
    const t = useTranslations("dashboard.school.classes.add");
    const {register,handleSubmit,formState: { errors },setValue} = useForm({defaultValues:{level_id:""}});

    const onSuccess = (data)=>{
        toast.success("Class added successfully");
        router.push("/dashboard/school/classes");
    };
    const onError = (error)=>{
        console.log(error);
        toast.error(error?.response?.data?.message || "Failed to add Class");
    };
    const addTeacher = useStoreClass({onSuccess,onError});
    const onSubmit = (data) => {
        addTeacher.mutate(data);
    };
    
    const {data:helpData,isLoading:helpIsLoading,isError:helpIsError,error:helpError,isSuccess:helpIsSuccess} = useHelpClasses({});    
  return (
    <div className='flex flex-col gap-6'>
        <BackSection />
        <ParentSection>
            <div>
                <h3 className='text-2xl font-bold'>{t("header")}</h3>
            </div>
            <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" mx-auto p-6  space-y-4"
                >
                {/* Name */}
                <div>
                <label className="block text-gray-700 font-semibold mb-1">
                    {t("name")}
                </label>
                <input
                    type="text"
                    {...register("name", { required: "Class Name is required" })}
                    placeholder={t("namePlaceholder")}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
                </div>
                
                
                {/* Level id */}
                <ErrorBoundary isLoading={helpIsLoading} isError={helpIsError} error={helpError} isSuccess={helpIsSuccess}>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        {t("assignLevelLabel")}
                    </label>
                    <select
                        {...register("level_id")}
                        className='w-full px-3 py-2 border border-gray-300 rounded'
                    >
                        <option value={""} disabled>{t("assignLevelPlaceholder")}</option>
                        {helpData?.data?.data?.levels?.map((level,i)=>{
                            return(
                                <option key={level.id} value={level.id}>{level.title}</option>
                            )
                        })}
                    </select>
                    {errors.level_id && (
                        <span className="text-red-500 text-sm">{errors.level_id.message}</span>
                    )}
                </div>
                </ErrorBoundary>
                {/* Media */}
                <FormMediaComponent 
                title={t("mediaLabel")}
                placeholder={t("mediaPlaceholder")}
                formTitle={"media"}
                register={register}
                setValue={setValue}
                setImage={setImage}
                image={image}
                errors={errors}
                />
                {/* Row 7: Buttons */}
                <div className="flex justify-between items-center mt-4">
                    <button
                    type="reset"
                    className="btn btn-secondary"
                    >
                    {t("resetBtn")}
                    </button>
                    <button
                    type="submit"
                    className="btn btn-primary"
                    >
                    {t("addBtn")}
                    </button>
                </div>
        </form>
            </div>
        </ParentSection>
    </div>
  )
}
