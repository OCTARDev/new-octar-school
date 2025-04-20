import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return axiosInstance.get(`/class-rooms/show/${id}`)
}

const useShowClass = ({id})=>{
    return useQuery({
        queryKey:["dashboard","classes","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowClass;