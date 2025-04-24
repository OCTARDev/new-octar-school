"use client";
import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ParentSection from '@/components/ParentSection';
import ErrorBoundary from '@/components/ErrorBoundary';
import useHelpTeachers from '@/tanstack-query/School/Teachers/useHelp';
import Link from 'next/link';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange';
import { useRouter } from 'next/navigation';
import useStoreTeacher from '@/tanstack-query/School/Teachers/useStore';
import teacherSchema from '@/utils/Validation/dashboard/teacher';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import FormMediaComponent from '@/components/FormMedia';
import BackSection from '@/components/BackSection';

export default function AddTeacher() {
    const t = useTranslations("dashboard.school.teachers.add");
    const [image, setImage] = useState(null);
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(teacherSchema) });

    const onSuccess = (data) => {
        toast.success(t("successMessage"));
        router.push("/dashboard/school/teachers");
    };
    const onError = (error) => {
        console.log(error);
        toast.error(error?.response?.data?.message || t("errorMessage"));
    };
    const addTeacher = useStoreTeacher({ onSuccess, onError });
    const onSubmit = (data) => {
        addTeacher.mutate(data);
    };

    const { data: helpData, isLoading: helpIsLoading, isError: helpIsError, error: helpError, isSuccess: helpIsSuccess } = useHelpTeachers({});
    return (
        <div className='flex flex-col gap-6'>
            <BackSection />
            <ParentSection>
                <div>
                    <h3 className='text-2xl font-bold'>{t("title")}</h3>
                </div>
                <div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=" mx-auto p-6  space-y-4"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                {t("nameLabel")}
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: t("nameRequired") })}
                                placeholder={t("namePlaceholder")}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name.message}</span>
                            )}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                {t("emailLabel")}
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: t("emailRequired") })}
                                placeholder={t("emailPlaceholder")}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>
                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">
                                {t("passwordLabel")}
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: t("passwordRequired") })}
                                placeholder={t("passwordPlaceholder")}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                            {errors.password && (
                                <span className="text-red-500 text-sm">{errors.password.message}</span>
                            )}
                        </div>
                        {/* Class Ids */}
                        <ErrorBoundary isLoading={helpIsLoading} isError={helpIsError} error={helpError} isSuccess={helpIsSuccess}>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">
                                    {t("assignClassLabel")}
                                </label>
                                <MultiChoiceSelect
                                    options={helpData?.data?.data?.class_rooms}
                                    setValue={setValue}
                                    selectId={"class_ids"}
                                    placeholder={t("assignClassPlaceholder")}
                                />
                                {errors.class_ids && (
                                    <span className="text-red-500 text-sm">{errors.class_ids.message}</span>
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
                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                type="reset"
                                className="btn btn-secondary"
                            >
                                {t("resetButton")}
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                {t("submitButton")}
                            </button>
                        </div>
                    </form>
                </div>
            </ParentSection>
        </div>
    );
}
