"use client";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import ParentSection from '@/components/ParentSection';
import ErrorBoundary from '@/components/ErrorBoundary';
import useHelpTeachers from '@/tanstack-query/School/Teachers/useHelp';
import MultiChoiceSelect from '@/components/MultipleChoiceSelect';
import handleSingleFileChange from '@/utils/helper-functions/handleSingleFileChange';
import useShowTeachers from '@/tanstack-query/School/Teachers/useShow';
import useUpdateTeacher from '@/tanstack-query/School/Teachers/useUpdate';
import { useRouter } from 'next/navigation';
import FormMediaComponent from '@/components/FormMedia';
import { useTranslations } from 'next-intl';

export default function EditTeacherSection({ id }) {
    const t = useTranslations("dashboard.school.teachers.edit");
    const [image, setImage] = useState(null);
    const router = useRouter();
    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm();
    const { data, isLoading, isError, isSuccess, error } = useShowTeachers({ id });

    const onSuccess = (data) => {
        toast.success(t("successMessage"));
        router.push("/dashboard/school/teachers");
    };
    const onError = (error) => {
        console.log(error);
        toast.error(error?.response?.data?.message || t("errorMessage"));
    };
    const editTeacher = useUpdateTeacher({ onSuccess, onError });
    const onSubmit = (data) => {
        editTeacher.mutate({ id, ...data });
    };

    const { data: helpData, isLoading: helpIsLoading, isError: helpIsError, error: helpError, isSuccess: helpIsSuccess } = useHelpTeachers({});
    useEffect(() => {
        if (data) {
            const teacher = data?.data?.data;
            const { name, email, classes } = teacher;
            setImage(teacher?.media_path);
            reset({ name, email, class_ids: classes.map(c => c.id) });
        }
    }, [data, isSuccess]);

    return (
        <ParentSection>
            <div>
                <h3 className='text-2xl font-bold'>{t("title")}</h3>
            </div>
            <div>
                <ErrorBoundary isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error}>
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
                                    values={data?.data?.data?.classes}
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
                        <div className="flex justify-end items-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                {t("submitButton")}
                            </button>
                        </div>
                    </form>
                </ErrorBoundary>
            </div>
        </ParentSection>
    );
}
