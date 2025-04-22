import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page})=>{
    return teacherAxiosInstance.get(`/dashboard?page=${page}`)
};

export default function useFetchTeacherDashboard({page}) {
    return useQuery({
        queryKey:['dashboard',"teacher","home",page],
        queryFn:()=>fetch({page}),
    });
}