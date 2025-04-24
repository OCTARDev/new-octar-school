"use client"
import ErrorBoundary from '@/components/ErrorBoundary';
import useShowTeacherStudentNotes from '@/tanstack-query/Teacher/Students/useShowNotes';
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import useStoreTeacherNotes from '@/tanstack-query/Teacher/Students/useStoreNotes';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function NotesSection({id}) {
    const t = useTranslations("dashboard.teacher.students.notes");
    const {data,isLoading,isError,isSuccess,error} = useShowTeacherStudentNotes({id});
    const notes = data?.data?.data;
    const router = useRouter();
    const { handleSubmit, control , setValue } = useForm();
    const onSuccess = (data)=>{
        toast.success(data?.data?.message || "Note added successfully");
        router.back();
    };
    const onError = (error)=>{
        console.log(error);
        toast.error(error?.response?.data?.message || "Failed to add Note");
    };
    const storeNote = useStoreTeacherNotes({onSuccess,onError});
    const onSubmit = (data)=>{
        console.log("data",data);
        storeNote.mutate({student_id:id,...data});
    }
    useEffect(()=>{
        if(data && isSuccess){
            console.log("data",data);
            setValue("note",notes.note);
        }
    },[isSuccess,data,setValue])
  return (
    <section className='flex flex-col gap-4'>
        {/* top Header */}
        <h1 className='text-4xl font-bold capitalize mt-6'>{t("header")}</h1>
        <ErrorBoundary isSuccess={isSuccess} isLoading={isLoading} isError={isError} error={error}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Rich Text Editor */}
            <div>
            <Controller
                name="note"
                control={control}
                defaultValue=""
                render={({ field }) => (
                <Editor
                    apiKey="wy8h5ha44kf8i3brpynjrth9usfhi275fq87pam0ulb64fee" // Optional: Get an API key from TinyMCE
                    value={field.value}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                    height: 300,
                    menubar: false,
                    plugins: 'link image code',
                    toolbar:
                        'undo redo | formatselect | bold italic | alignleft aligncenter alignright | link image',
                    }}
                />
                )}
            />
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="btn btn-primary"
            >
            {t("btn")}
            </button>
        </form>
        </ErrorBoundary>
    </section>
  )
}
