import parentAxiosInstance from "@/utils/parentAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return parentAxiosInstance.get(`/user`);
}


export default function useParentProfileShow(){
    return useQuery({
        queryKey:["dashboard","parent","profile","show"],
        queryFn:()=>fetch()
    })
}