import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return axiosInstance.get(`/students/show/${id}`)
}

const useShowStudent = ({id})=>{
    return useQuery({
        queryKey:["dashboard","students","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowStudent;