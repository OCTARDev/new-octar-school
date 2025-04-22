import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";


const fetch = ({pageParam = 1}) => {
    return teacherAxiosInstance.get(`/community?page=${pageParam}`);
}


const useIndexTeacherCommunity = () => {
    return useInfiniteQuery({
      queryKey: ["community","teacher","index"],
      queryFn: fetch,
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.data.data.current_page;
        const totalPages = lastPage.data.data.total_pages;
        
        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
    });
  };
  


export default useIndexTeacherCommunity;