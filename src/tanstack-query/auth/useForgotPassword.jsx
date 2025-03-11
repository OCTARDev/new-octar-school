import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const forgot = (data)=>{
    return axiosInstance.post("/auth/forgot-password",data)
};


const useForgotPassword = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:forgot,
        onSuccess,
        onError
    })
};


export default useForgotPassword;