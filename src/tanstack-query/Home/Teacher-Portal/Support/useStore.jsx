import teacherAxiosInstance from "@/utils/teacherAxiosInstance";
import { useMutation } from "@tanstack/react-query"; 

const store = (data)=>{

    return teacherAxiosInstance.post("/teacher-community/support/send-message",data);
};


const useStoreSupportMessage = ({onSuccess,onError})=>{
    return useMutation({
        mutationFn:store,
        onSuccess,
        onError
    })
};

export default useStoreSupportMessage;