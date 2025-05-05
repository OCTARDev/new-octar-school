import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";


const fetch = () => {
    return axiosInstance.get(`/home-page/events`);
}


const useIndexEvents = () => {
    return useQuery({
      queryKey: ["home","events","index"],
      queryFn: fetch,
    });
  };
  


export default useIndexEvents;