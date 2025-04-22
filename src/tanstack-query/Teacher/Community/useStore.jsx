import { useMutation } from "@tanstack/react-query";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";


const store = (data)=>{
    console.log(data);
    
    const formData = new FormData()
    if(data.media instanceof File ){
        formData.append("media",data.media);
    }
    // Append all user fields to the FormData
    Object.keys(data).forEach((key) => {
        if (key !== 'media') {
            formData.append(key, data[key]);
        }
    });
    return teacherAxiosInstance.post("/community/store",formData)
};


const useStoreTeacherCommunityPost = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};


export default useStoreTeacherCommunityPost;