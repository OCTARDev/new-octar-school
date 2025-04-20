import axiosInstance from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ({page})=>{
    return axiosInstance.get(`/subscriptions/payment-history?page=${page}`)
}

const usePaymentHistory = ({page})=>{
    return useQuery({
        queryKey:["dashboard","subs","payment-history",page],
        queryFn:()=>fetch({page})
    })
};


export default usePaymentHistory;