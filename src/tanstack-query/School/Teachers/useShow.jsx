import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return axiosInstance.get(`/teachers/show/${id}`)
}

const useShowTeachers = ({id})=>{
    return useQuery({
        queryKey:["dashboard","teachers","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowTeachers;