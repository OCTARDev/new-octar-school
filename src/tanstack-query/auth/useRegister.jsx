import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const register = (data)=>{
    return axiosInstance.post("/auth/signup",data)
};


const useRegister = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:register,
        onSuccess,onError
    })
};


export default useRegister;