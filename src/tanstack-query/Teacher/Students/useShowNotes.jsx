import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return teacherAxiosInstance.get(`/class-rooms/students/show-notes/${id}`)
}

const useShowTeacherStudentNotes = ({id})=>{
    return useQuery({
        queryKey:["dashboard","teacher","students","show-notes",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowTeacherStudentNotes;