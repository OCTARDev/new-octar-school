import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const resend = ()=>{
    return axiosInstance.post("/auth/resend-otp")
};


const useResendOtp = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:resend,
        onSuccess,
        onError
    })
};


export default useResendOtp;