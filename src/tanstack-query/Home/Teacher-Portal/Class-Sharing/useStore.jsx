import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation } from "@tanstack/react-query"; 

const store = (data)=>{
    console.log("store data",data);
    const formData = new FormData();

    if (data.media && data.media.length > 0) {
        formData.append('media', data.media[0]);
    }
    // Append all user fields to the FormData
    Object.keys(data).forEach((key) => {
        if (key !== 'media' ) {
            formData.append(key, data[key]);
          }
    });
    return teacherAxiosInstance.post("/teacher-community/share-classroom/add-post",formData);
};


const useStorePost = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};

export default useStorePost;