import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id,lang)=>{
    const params = new URLSearchParams();
    if (lang) params.append("lang", String(lang));
    return axiosInstance.get(`/home-page/categories/index-curriculums/${id}?${params.toString()}`);
}


export default function useFetchCurriculum({id,lang}){
    return useQuery({
        queryKey:["homepage","curriculum",id,lang],
        queryFn:()=>fetch(id,lang)
    })
}