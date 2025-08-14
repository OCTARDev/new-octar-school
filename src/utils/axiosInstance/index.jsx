import axios from "axios";
import {store} from "@/redux/store";
import { logOut } from "@/redux/slices/user.slice";
import Cookies from "js-cookie";
const baseURL = process.env.NEXT_PUBLIC_API_URL;
import Router from 'next/router';

const axiosInstance = axios.create({
    baseURL
});

// Function to get user from cookies
const getUser = () => {
    const userCookie = Cookies.get("user");
    return userCookie ? JSON.parse(userCookie) : null;
};
//axios request interceptor to put the token inside every request
axiosInstance.interceptors.request.use(async (req)=>{
    const user = getUser();
    if(user && user.token){
        req.headers.Authorization = `Bearer ${user.token}`
    }
    // Get the current locale from cookies (NEXT_LOCALE)
    const currentLanguage = Cookies.get("NEXT_LOCALE") || "en";
    req.headers["X-App-Locale"] = currentLanguage;
    return req;
})

//axios response interceptor for dealing with if the token we sent was expired or invalid
axiosInstance.interceptors.response.use(
    res =>res,
    async(error)=>{
        
        const originalRequest = error.config;

        // ✅ Redirect on 403 without retry
        if (error.response?.status === 403) {
            console.log("status 403");
            
            if (typeof window !== "undefined") {
                console.log("window isnt undefined");
                
                window.location.href = "/otp";
            }
            return Promise.reject(error);
        }

        // on status 401
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try{      
                const user = getUser();   
                const refreshToken = user?.refreshToken;
                const response = await axios.post(`${baseURL}/auth/refresh`,{refreshToken});
                
                const newAccessToken = response.data.accessToken;
                const newRefreshToken = response.data.refreshToken;
                const newUser = {
                    user:user.user,
                    accessToken:newAccessToken,
                    refreshToken:newRefreshToken
                };
                Cookies.set("user",JSON.stringify(newUser),{ 
                    expires,
                    path: "/",
                    secure:true,
                    sameSite:"Strict"
                });
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
                return axiosInstance(originalRequest);

            }catch(refreshError){
                console.log("deleting user", refreshError);
                
                localStorage.removeItem("user");
                store.dispatch(logOut());
                return Promise.reject(refreshError);
            }
        }
        
        return Promise.reject(error);
    }

)




export default axiosInstance;