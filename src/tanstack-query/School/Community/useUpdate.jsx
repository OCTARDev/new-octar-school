import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";


const edit = ({id,...data})=>{    
    const formData = new FormData();
    formData.append("_method","put");
    if(data.media instanceof File ){
        formData.append("media",data.media);
    }
    // Append all user fields to the FormData
    Object.keys(data).forEach((key) => {
        if (key !== 'media') {
            formData.append(key, data[key]);
        }
    });
    return axiosInstance.post(`/community/update/${id}`,formData)
};


const useUpdateCommunityPost = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:edit,
        onSuccess,
        onError
    })
};


export default useUpdateCommunityPost;