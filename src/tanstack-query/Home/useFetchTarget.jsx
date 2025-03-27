import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (targetId)=>{
    return axiosInstance.get(`/home-page/categories/index-targets/${targetId}`);
}


export default function useFetchTarget({targetId}){
    return useQuery({
        queryKey:["homepage","target",targetId],
        queryFn:()=>fetch(targetId)
    })
}