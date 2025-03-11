import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";


const login = (data)=>{
    return axiosInstance.post("/auth/sign-in",data)
};


const useLogin = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:login,
        onSuccess,
        onError
    })
};


export default useLogin;