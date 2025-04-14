import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page,search})=>{
    return axiosInstance.get(`/teachers?page=${page}&search=${search}`)
}

const useIndexTeachers = ({page,search})=>{
    return useQuery({
        queryKey:["dashboard","teachers","index",page,search],
        queryFn:()=>fetch({page,search})
    })
};


export default useIndexTeachers;