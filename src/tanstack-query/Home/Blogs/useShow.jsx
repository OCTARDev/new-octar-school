import axiosInstance from '@/utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';


const fetch  = (id)=>{
    return axiosInstance.get(`/home-page/blogs/show/${id}`)
};


const useShowBlog = (id)=>{
    return useQuery({
        queryKey:["home","blogs","show",id],
        queryFn:()=>fetch(id),
    })
}

export default useShowBlog;