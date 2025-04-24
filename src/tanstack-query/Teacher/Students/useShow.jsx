import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return teacherAxiosInstance.get(`/class-rooms/students/show/${id}`)
}

const useShowTeacherStudent = ({id})=>{
    return useQuery({
        queryKey:["dashboard","teacher","students","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowTeacherStudent;