import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get("/home-page/index-grades");
}


export default function useFetchGrades(){
    return useQuery({
        queryKey:["homepage","header"],
        queryFn:fetch
    })
}