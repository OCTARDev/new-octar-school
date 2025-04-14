import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";


const store = (data)=>{
    const formData = new FormData()
    if(data.media instanceof File ){
        formData.append("media",data.media);
    }
    formData.append("_method","put");
    return axiosInstance.post("/user/update-logo",formData)
};


const useStoreLogo = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};


export default useStoreLogo;