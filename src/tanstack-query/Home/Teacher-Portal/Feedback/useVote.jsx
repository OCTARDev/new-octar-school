import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const dt = (data)=>{
    return teacherAxiosInstance.post(`/teacher-community/feedback/submit-vote`,data)
}

const useVoteTeacherPortalFeedback = ({onSuccess,onError})=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:dt,
        onSuccess: (data)=>{
            queryClient.invalidateQueries({
                queryKey:["homepage","teacher-portal","feedback","index"]
            });
            toast.success(data?.data?.message || "Voted Successfully")
            onSuccess && onSuccess(data);
        },
        onError
    })
};

export default useVoteTeacherPortalFeedback;