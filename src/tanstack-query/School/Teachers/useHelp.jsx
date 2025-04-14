import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({})=>{
    return axiosInstance.get(`/teachers/help-data`)
}

const useHelpTeachers = ({})=>{
    return useQuery({
        queryKey:["dashboard","teachers","help"],
        queryFn:()=>fetch({})
    })
};


export default useHelpTeachers;