import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import useVoteTeacherPortalFeedback from '@/tanstack-query/Home/Teacher-Portal/Feedback/useVote';


export default function FeedbackVoteSection({data}) {
  return (
    <section className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-4'>
            <h2 className='text-3xl font-bold mb-3 '>Share Your Opinion & Vote with OCTAR Teachers</h2>
            <p >Choose the option that suits you best and help us make the right decision for everyone.</p>
        </div>
        
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true  }}
                modules={[Pagination]}
                className="mb-4 "
                >
                {data?.map((item, i) => (
                    <SwiperSlide key={i} className='mb-4 py-2 px-1 !h-auto'>
                    <div className='shadow-sm  rounded-lg px-6 pt-3 pb-6  ring-2 ring-primaryA1 hover:shadow-2xl transition-shadow duration-400 space-y-3 !h-full'>
                        <QuestionForm data={item}/>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export const schema = yup.object().shape({
    ans_id: yup.string().required("Answer is required"),
});
const QuestionForm = ({data})=>{
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schema)});
    const vote = useVoteTeacherPortalFeedback({});
    const onSubmit = (form)=>{
        vote.mutate({
            ...form,
            que_id:data.id
        })
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-center font-bold text-3xl capitalize mb-2'>{data?.que}</h2>
            <div className='flex flex-col gap-4'>
            {
                data?.answers?.map((ans)=>{
                    return(
                        <CustomRadio 
                            key={ans.id}
                            id={`${ans.ans}_${ans.id}`}
                            value={ans.id}
                            {...register("ans_id")}
                            defaultChecked={ans?.is_answered}
                        >
                            {ans.ans}
                        </CustomRadio>
                        
                    )
                })
            }
            {
                errors?.ans_id && 
                    <p className='text-statusError'>{errors?.ans_id?.message}</p>
            }
            <button className='btn btn-primary mx-auto'>Submit</button>
            </div>
        </form>
    )
}

const CustomRadio = React.forwardRef(({ 
  id, 
  name, 
  value, 
  children, 
  disabled = false,
  ...props 
}, ref) => {
  return (
    <label 
      htmlFor={id}
      className={`
        relative flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        hidden
        {...props}
      />
      
      {/* Custom radio circle */}
      <div className="relative w-8 h-8 border-2 border-gray-300 rounded-full mr-3 flex-shrink-0 transition-all duration-200 peer-checked:border-blue-500">
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 scale-0 peer-checked:scale-100" />
      </div>
      
      {/* Label text */}
      <span className={`
        text-gray-700  leading-5 font-semibold capitalize
        ${disabled ? 'text-gray-400' : ''}
      `}>
        {children}
      </span>
      
      <style jsx>{`
        input:checked + div {
          border-color: #6E75E9;
        }
        input:checked + div > div {
          transform: translate(-50%, -50%) scale(1);
        }
        input:focus + div {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </label>
  );
});