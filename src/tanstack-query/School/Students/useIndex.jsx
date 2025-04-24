import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({search,id})=>{
    return axiosInstance.get(`students/${id}?search=${search}`)
}

const useIndexStudents = ({search,id})=>{
    return useQuery({
        queryKey:["dashboard","school","students","index",id,search],
        queryFn:()=>fetch({search,id})
    })
};


export default useIndexStudents;