import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.put(`/class-rooms/restore/${id}`);
};

const useRestoreClass = ({onSuccess,onError})=>{
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

export default useRestoreClass;