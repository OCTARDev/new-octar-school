import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const verify = (data)=>{
    return axiosInstance.post("/auth/verify-otp",data)
};


const useVerifyOtp = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:verify,
        onSuccess,
        onError
    })
};


export default useVerifyOtp;