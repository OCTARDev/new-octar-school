import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = (id)=>{

    return axiosInstance.get(`/levels/show-curriculums/${id}`)
}

const useShowCurriculum = ({id})=>{
    return useQuery({
        queryKey:["dashboard","subjects","curriculums",id],
        queryFn:()=>fetch(id)
    })
};


export default useShowCurriculum;