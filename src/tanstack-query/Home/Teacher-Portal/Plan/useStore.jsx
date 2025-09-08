import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query"; 

const store = (data)=>{
    console.log("store data",data);
    const formData = new FormData();

    if (data.file && data.file.length > 0) {
        formData.append('file', data.file[0]);
    }
    // Append all user fields to the FormData
    Object.keys(data).forEach((key) => {
        if (key !== 'file' ) {
            formData.append(key, data[key]);
          }
    });
    return teacherAxiosInstance.post("/teacher-community/plan-lessons/add-your-lesson",formData);
};


const useStorePlanLesson = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:store,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey:["homepage","teacher-portal","plan","show"]
            });
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useStorePlanLesson;