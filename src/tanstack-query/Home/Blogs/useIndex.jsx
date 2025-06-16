import axiosInstance from '@/utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';


const fetch  = ()=>{
    return axiosInstance.get("/home-page/blogs")
};


const useIndexBlogs = ()=>{
    return useQuery({
        queryKey:["home","blogs","index"],
        queryFn:fetch,
    })
}

export default useIndexBlogs;