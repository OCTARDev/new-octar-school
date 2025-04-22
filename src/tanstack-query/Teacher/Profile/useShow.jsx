import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return teacherAxiosInstance.get(`/show-profile`)
};

export default function useShowTeacherProfile() {
    return useQuery({
        queryKey:['dashboard',"teacher","profile","show"],
        queryFn:()=>fetch(),
    });
}