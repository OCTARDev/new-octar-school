import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetch = (id)=>{
    return teacherAxiosInstance.get(`/teacher-community/share-classroom/show/${id}`);
};


const useShowTeacherPortalClassShare = (id)=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","class-sharing","show",id],
        queryFn:()=>fetch(id),
        enabled: !!id
    })
};

export default useShowTeacherPortalClassShare;