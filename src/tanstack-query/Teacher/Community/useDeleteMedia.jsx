import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return teacherAxiosInstance.delete(`/community/delete-media/${id}`);
};

const useDeleteTeacherCommunityPostMedia = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["community","teacher","show"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteTeacherCommunityPostMedia;