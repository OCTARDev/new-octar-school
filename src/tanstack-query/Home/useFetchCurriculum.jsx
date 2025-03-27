import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{
    return axiosInstance.get(`/home-page/categories/${id}`);
}


export default function useFetchCurriculum({id}){
    return useQuery({
        queryKey:["homepage","curriculum",id],
        queryFn:()=>fetch(id)
    })
}