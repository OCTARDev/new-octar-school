import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.put(`/students/restore/${id}`);
};

const useRestoreStudent = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["dashboard","school","students","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useRestoreStudent;