import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";



const fetch = ({page,type})=>{
    const params = new URLSearchParams();
    if (page) params.append("page", String(page));
    if (type) params.append("type", type);
    return teacherAxiosInstance.get(`/teacher-community/resource-reward?${params.toString()}`);
};


const useIndexTeacherPortalResources = ({page,type})=>{
    return useQuery({
        queryKey:["homepage","teacher-portal","resources","index",
            page,
            type
        ],
        queryFn:()=>fetch({page,type})
    })
};

export default useIndexTeacherPortalResources;