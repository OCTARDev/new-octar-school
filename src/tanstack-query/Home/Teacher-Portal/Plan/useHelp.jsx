import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetch = ()=>{
    return teacherAxiosInstance.get(`/teacher-community/plan-lessons/help-data`);
};


const useHelpTeacherPortalPlanLessons = ()=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","plan","help",],
        queryFn:()=>fetch()
    })
};

export default useHelpTeacherPortalPlanLessons;