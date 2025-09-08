import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetch = (id)=>{
    return teacherAxiosInstance.get(`/teacher-community/plan-lessons/show/${id}`);
};


const useShowTeacherPortalPlan = (id)=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","plan","show",id],
        queryFn:()=>fetch(id),
        enabled: !!id
    })
};

export default useShowTeacherPortalPlan;