import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.put(`/teachers/restore/${id}`);
};

const useRestoreTeacher = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["dashboard","teachers","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useRestoreTeacher;