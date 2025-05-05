import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{
    return axiosInstance.get(`/home-page/events/show/${id}`);
}


export default function useShowEvent({id}){
    return useQuery({
        queryKey:["homepage","events","show",id],
        queryFn:()=>fetch(id)
    })
}