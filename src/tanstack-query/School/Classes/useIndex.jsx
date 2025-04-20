import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page,search})=>{
    return axiosInstance.get(`/class-rooms?page=${page}&search=${search}`)
}

const useIndexClasses = ({page,search})=>{
    return useQuery({
        queryKey:["dashboard","classes","index",page,search],
        queryFn:()=>fetch({page,search})
    })
};


export default useIndexClasses;