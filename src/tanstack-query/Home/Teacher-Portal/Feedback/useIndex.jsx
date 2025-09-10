import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return teacherAxiosInstance.get(`/teacher-community/feedback`);
}


export default function useIndexTeacherPortalFeedback(){
    return useQuery({
        queryKey:["homepage","teacher-portal","feedback","index"],
        queryFn:()=>fetch()
    })
}