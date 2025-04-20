import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.delete(`/community/delete-media/${id}`);
};

const useDeleteCommunityPostMedia = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["community","show"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteCommunityPostMedia;