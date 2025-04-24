import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (id)=>{
    return teacherAxiosInstance.put(`/class-rooms/students/restore/${id}`);
};

const useRestoreTeacherStudent = ({onSuccess,onError})=>{
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

export default useRestoreTeacherStudent;