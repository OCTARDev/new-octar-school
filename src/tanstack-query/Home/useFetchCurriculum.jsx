import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{
    return axiosInstance.get(`/home-page/categories/index-curriculums/${id}`);
}


export default function useFetchCurriculum({id}){
    return useQuery({
        queryKey:["homepage","curriculum",id],
        queryFn:()=>fetch(id)
    })
}