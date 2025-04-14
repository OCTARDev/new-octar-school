import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get(`/user/show-profile`)
};

export default function useShowProfile() {
    return useQuery({
        queryKey:['dashboard',"school","profile","show"],
        queryFn:()=>fetch(),
    });
}