import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (planId)=>{
    return axiosInstance.get(`/home-page/subscription-plans/show/${planId}`);
}


export default function useFetchSinglePlan({planId}){
    return useQuery({
        queryKey:["homepage","plans","single",planId],
        queryFn:()=>fetch(planId)
    })
}