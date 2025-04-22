import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return teacherAxiosInstance.get(`/subjects/help-data`)
}

const useTeacherSubjectsHelp = ()=>{
    return useQuery({
        queryKey:["dashboard","teacher","subjects","help"],
        queryFn:fetch
    })
};


export default useTeacherSubjectsHelp;