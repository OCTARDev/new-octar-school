import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return axiosInstance.get(`/community/edit/${id}`)
}

const useShowCommunityPost = ({id})=>{
    return useQuery({
        queryKey:["community","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowCommunityPost;