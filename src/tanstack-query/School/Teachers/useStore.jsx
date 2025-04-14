import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axiosInstance";


const store = (data)=>{
    console.log(data);
    
    const formData = new FormData()
    if(data.media instanceof File ){
        formData.append("media",data.media);
    }
    data?.class_ids?.forEach((id, index) => {
        formData.append(`class_ids[${index}]`, id);
      });
    // Append all user fields to the FormData
    Object.keys(data).forEach((key) => {
        if (key !== 'media' && key !== "class_ids") {
            formData.append(key, data[key]);
        }
    });
    return axiosInstance.post("/teachers/store",formData)
};


const useStoreTeacher = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};


export default useStoreTeacher;