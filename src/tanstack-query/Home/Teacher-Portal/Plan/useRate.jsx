import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const dt = (data)=>{
    return teacherAxiosInstance.post(`/teacher-community/plan-lessons/rate-teacher-plan`,data)
}

const useRateTeacherPortalLesson = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey:["homepage","teacher-portal","plan","show"]
            });
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useRateTeacherPortalLesson;