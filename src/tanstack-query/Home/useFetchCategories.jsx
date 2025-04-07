import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{
    return axiosInstance.get(`/home-page/categories/${id}`);
}


export default function useFetchCategories({id}){
    return useQuery({
        queryKey:["homepage","categories",id],
        queryFn:()=>fetch(id)
    })
}