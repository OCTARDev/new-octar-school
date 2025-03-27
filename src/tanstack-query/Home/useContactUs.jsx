import axiosInstance from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const contactUs = (data)=>{
    return axiosInstance.post("/home-page/contact-us",data)
};


export default function useContactUs({onSuccess,onError}){
    return useMutation({
        mutationFn:contactUs,
        onSuccess,
        onError
    })
};