import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.delete(`/community/delete/${id}`);
};

const useDeleteCommunityPost = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["community","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteCommunityPost;