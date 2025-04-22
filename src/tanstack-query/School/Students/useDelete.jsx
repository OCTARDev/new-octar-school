import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return teacherAxiosInstance.delete(`/class-rooms/students/delete/${id}`);
};

const useDeleteTeacherStudent = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries(["dashboard","teacher","students","index"]);
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useDeleteTeacherStudent;