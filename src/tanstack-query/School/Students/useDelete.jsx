import axiosInstance from "@/utils/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return axiosInstance.delete(`/students/delete/${id}`);
};

const useDeleteStudent = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["dashboard","students","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteStudent;