import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{
    return axiosInstance.get(`/home-page/news/show/${id}`);
}


export default function useShowNew({id}){
    return useQuery({
        queryKey:["homepage","news","show",id],
        queryFn:()=>fetch(id)
    })
}