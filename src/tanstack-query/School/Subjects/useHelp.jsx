import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get(`/levels/help-data`)
}

const useSubjectsHelp = ()=>{
    return useQuery({
        queryKey:["dashboard","subjects","help"],
        queryFn:fetch
    })
};


export default useSubjectsHelp;