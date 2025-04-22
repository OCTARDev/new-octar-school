import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{

    return teacherAxiosInstance.get(`/subjects/show-category/${id}`)
}

const useShowTeacherCategories = ({id})=>{
    return useQuery({
        queryKey:["dashboard","teacher","subjects","categories",id],
        queryFn:()=>fetch(id)
    })
};


export default useShowTeacherCategories;