import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (targetId)=>{
    return axiosInstance.get(`/home-page/subscription-plans`);
}


export default function useFetchPlans(){
    return useQuery({
        queryKey:["homepage","plans"],
        queryFn:()=>fetch()
    })
}