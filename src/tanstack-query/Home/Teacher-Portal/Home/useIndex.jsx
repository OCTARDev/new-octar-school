import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return teacherAxiosInstance.get(`/teacher-community/welcome`);
}


export default function useIndexTeacherPortalHome(){
    return useQuery({
        queryKey:["homepage","teacher-portal","home"],
        queryFn:()=>fetch()
    })
}