import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{

    return teacherAxiosInstance.get(`/subjects/show-curriculums/${id}`)
}

const useShowTeacherCurriculum = ({id})=>{
    return useQuery({
        queryKey:["dashboard","teacher","subjects","curriculums",id],
        queryFn:()=>fetch(id)
    })
};


export default useShowTeacherCurriculum;