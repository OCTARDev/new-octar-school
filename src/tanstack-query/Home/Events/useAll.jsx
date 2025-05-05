import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetch = () => {
    return axiosInstance.get(`/home-page/events/see-more`);
}


const useAllEvents = () => {
    return useQuery({
      queryKey: ["home","events","all"],
      queryFn: fetch,
    });
  };
  


export default useAllEvents;