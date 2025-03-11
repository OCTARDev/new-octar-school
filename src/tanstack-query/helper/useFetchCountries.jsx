import axiosInstance from "../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get("/auth/help-data")
};

export default function useFetchCountries(){
    return useQuery({
        queryKey:["help","countries"],
        queryFn:fetch,
    })
}