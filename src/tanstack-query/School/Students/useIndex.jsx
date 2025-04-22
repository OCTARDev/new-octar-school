import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({search,id})=>{
    return teacherAxiosInstance.get(`/class-rooms/students/${id}?search=${search}`)
}

const useIndexTeacherStudents = ({search,id})=>{
    return useQuery({
        queryKey:["dashboard","teacher","students","index",id,search],
        queryFn:()=>fetch({search,id})
    })
};


export default useIndexTeacherStudents;