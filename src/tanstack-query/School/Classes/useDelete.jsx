import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.delete(`/class-rooms/delete/${id}`);
};

const useDeleteClass = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["dashboard","classes","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteClass;