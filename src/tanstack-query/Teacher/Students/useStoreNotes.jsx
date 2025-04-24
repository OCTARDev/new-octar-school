import { useMutation } from "@tanstack/react-query";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";


const store = (data)=>{

    return teacherAxiosInstance.post("/class-rooms/students/add-note",data)
};


const useStoreTeacherNotes = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};


export default useStoreTeacherNotes;