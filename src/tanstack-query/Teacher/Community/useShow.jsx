import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return teacherAxiosInstance.get(`/community/edit/${id}`)
}

const useShowTeacherCommunityPost = ({id})=>{
    return useQuery({
        queryKey:["community","teacher","show",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowTeacherCommunityPost;