import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({search,level_ids})=>{
    console.log(search,level_ids);
    
    const params = new URLSearchParams();
    if (search) params.append("search", search);
    level_ids?.forEach((id, index) => {
        params.append(`level_ids[${index}]`, id);
      });
    return axiosInstance.get(`/levels?${params.toString()}`)
}

const useIndexSubjects = ({search,level_ids})=>{
    return useQuery({
        queryKey:["dashboard","subjects","index",search,level_ids],
        queryFn:()=>fetch({search,level_ids})
    })
};


export default useIndexSubjects;