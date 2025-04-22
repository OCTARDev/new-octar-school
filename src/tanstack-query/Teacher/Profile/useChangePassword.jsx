import { useMutation } from "@tanstack/react-query";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";


const update = (data)=>{
    return teacherAxiosInstance.put("/change-password",data)
};


const useChangeTeacherPassword = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:update,
        onSuccess,
        onError
    })
};


export default useChangeTeacherPassword;