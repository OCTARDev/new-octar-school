import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({id})=>{
    return axiosInstance.get(`/students/show-notes/${id}`)
}

const useShowStudentNotes = ({id})=>{
    return useQuery({
        queryKey:["dashboard","school","students","show-notes",id],
        queryFn:()=>fetch({id})
    })
};


export default useShowStudentNotes;