import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const comment = (data)=>{
    console.log(data);
    
    return teacherAxiosInstance.post(`/teacher-community/share-classroom/add-comment`,data)
}

const useCommentTeacherPortalClassShare = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:comment,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey:["homepage","teacher-portal","class-sharing","show"]
            });
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useCommentTeacherPortalClassShare;