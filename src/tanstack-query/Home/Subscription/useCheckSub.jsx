import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const check = (data)=>{
    return axiosInstance.post("/home-page/subscription-plans/check-old-subscription",data)
};

export default function useCheckSub({onSuccess,onError}){
    return useMutation({
        mutationFn:check,
        onSuccess,
        onError
    })
}