import parentAxiosInstance from "@/utils/parentAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return parentAxiosInstance.get(`/user/show-notes`);
}


export default function useParentNotesIndex(){
    return useQuery({
        queryKey:["dashboard","parent","notes","index"],
        queryFn:()=>fetch()
    })
}