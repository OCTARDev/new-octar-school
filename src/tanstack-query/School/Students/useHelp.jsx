import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({})=>{
    return axiosInstance.get(`/class-rooms/help-data`)
}

const useHelpClasses = ({})=>{
    return useQuery({
        queryKey:["dashboard","school","classes","help"],
        queryFn:()=>fetch({})
    })
};


export default useHelpClasses;