import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const reset = (data)=>{
    return axiosInstance.post("/auth/reset-password",data)
};


const useResetPassword = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:reset,
        onSuccess,
        onError
    })
};


export default useResetPassword;