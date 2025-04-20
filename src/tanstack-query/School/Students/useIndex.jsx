import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page,search,id})=>{
    return axiosInstance.get(`/students/${id}?page=${page}&search=${search}`)
}

const useIndexStudents = ({page,search,id})=>{
    return useQuery({
        queryKey:["dashboard","students","index",id,page,search],
        queryFn:()=>fetch({page,search,id})
    })
};


export default useIndexStudents;