import axiosInstance from "@/utils/axiosInstance";
import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return teacherAxiosInstance.delete(`/community/delete/${id}`);
};

const useDeleteTeacherCommunityPost = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["community","teacher","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteTeacherCommunityPost;