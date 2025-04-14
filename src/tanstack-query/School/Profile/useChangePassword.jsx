import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";


const update = (data)=>{
    return axiosInstance.put("/user/change-password",data)
};


const useChangeSchoolPassword = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:update,
        onSuccess,
        onError
    })
};


export default useChangeSchoolPassword;