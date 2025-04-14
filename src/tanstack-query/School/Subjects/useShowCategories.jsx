import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{

    return axiosInstance.get(`/levels/show-categories/${id}`)
}

const useShowCategories = ({id})=>{
    return useQuery({
        queryKey:["dashboard","subjects","categories",id],
        queryFn:()=>fetch(id)
    })
};


export default useShowCategories;