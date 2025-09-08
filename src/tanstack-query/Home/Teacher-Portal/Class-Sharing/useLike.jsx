import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return teacherAxiosInstance.put(`/teacher-community/share-classroom/add-like-dislike/${id}`)
}

const useLikeTeacherPortalClassShare = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey:["homepage","teacher-portal","class-sharing"]
            });
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useLikeTeacherPortalClassShare;