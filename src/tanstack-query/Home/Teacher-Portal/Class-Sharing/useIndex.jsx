import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (page)=>{
    const params = new URLSearchParams();
    if (page) params.append("page", String(page));
    return teacherAxiosInstance.get(`/teacher-community/share-classroom?${params.toString()}`);
}


export default function useIndexTeacherPortalClassShare(page){
    return useQuery({
        queryKey:["homepage","teacher-portal","class-sharing","index",page],
        queryFn:()=>fetch(page)
    })
}