import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";



const fetch = ({page,type})=>{
    const params = new URLSearchParams();
    if (page) params.append("page", String(page));
    if (type) params.append("type", type);
    return teacherAxiosInstance.get(`/teacher-community/support?${params.toString()}`);
};


const useIndexTeacherPortalSupport = ({page,type})=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","plan","index",
            page,
            type
        ],
        queryFn:()=>fetch({page,type})
    })
};

export default useIndexTeacherPortalSupport;