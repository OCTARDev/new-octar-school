import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const check = (data)=>{
    return axiosInstance.post("/home-page/subscription-plans/send-request",data)
};

export default function useSubscribe({onSuccess,onError}){
    return useMutation({
        mutationFn:check,
        onSuccess,
        onError
    })
}