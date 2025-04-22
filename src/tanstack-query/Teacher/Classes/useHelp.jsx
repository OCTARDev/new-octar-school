import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({})=>{
    return teacherAxiosInstance.get(`/class-rooms/help-data`)
}

const useHelpTeacherClasses = ()=>{
    return useQuery({
        queryKey:["dashboard","teacher","classes","help"],
        queryFn:()=>fetch({})
    })
};


export default useHelpTeacherClasses;