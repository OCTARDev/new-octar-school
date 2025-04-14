import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";


const update = (data)=>{
    return axiosInstance.put("/user/update-school-info",data)
};


const useUpdateSchoolProfile = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:update,
        onSuccess,
        onError
    })
};


export default useUpdateSchoolProfile;