import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get(`/home-page/faqs`);
}


export default function useFetchFAQs(){
    return useQuery({
        queryKey:["homepage","faqs"],
        queryFn:()=>fetch()
    })
}