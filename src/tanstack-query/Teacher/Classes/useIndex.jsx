import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({search,levelId})=>{
    return teacherAxiosInstance.get(`/class-rooms?search=${search}&level_id=${levelId}`)
}

const useIndexTeacherClasses = ({search,levelId})=>{
    return useQuery({
        queryKey:["dashboard","teacher","classes","index",search,levelId],
        queryFn:()=>fetch({search,levelId})
    })
};


export default useIndexTeacherClasses;