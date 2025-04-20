import axiosInstance from "@/utils/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";


const fetch = ({pageParam = 1}) => {
    return axiosInstance.get(`/community?page=${pageParam}`);
}


const useIndexCommunity = () => {
    return useInfiniteQuery({
      queryKey: ["community","index"],
      queryFn: fetch,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.data.current_page;
        const totalPages = lastPage.data.data.total_pages;
        
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });
  };
  


export default useIndexCommunity;