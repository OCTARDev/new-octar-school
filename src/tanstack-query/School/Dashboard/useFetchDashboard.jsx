import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page})=>{
    return axiosInstance.get(`/home?page=${page}`)
};

export default function useFetchDashboard({page}) {
    return useQuery({
        queryKey:['dashboard',"school","home",page],
        queryFn:()=>fetch({page}),
    });
}