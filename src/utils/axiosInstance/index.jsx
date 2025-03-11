import axios from "axios";
import {store} from "../../redux/store";
import i18n from "../../i18n"; 
import { logOut } from "../../redux/slices/user.slice";
import Cookies from "js-cookie";
const baseURL = process.env.NEXT_PUBLIC_API_URL;


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
    const currentLanguage = i18n.language;
    req.headers["X-App-Locale"] = currentLanguage;
    return req;
})

//axios response interceptor for dealing with if the token we sent was expired or invalid
axiosInstance.interceptors.response.use(
    res =>res,
    async(error)=>{
        
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            try{      
                const user = getUser();   
                const refreshToken = user?.refreshToken;
                const response = await axios.post(`${baseURL}/auth/refresh`,{refreshToken});
                console.log("refresh",response);
                
                const newAccessToken = response.data.accessToken;
                const newRefreshToken = response.data.refreshToken;
                const newUser = {
                    user:user.user,
                    accessToken:newAccessToken,
                    refreshToken:newRefreshToken
                };
                localStorage.setItem("user",JSON.stringify(newUser));
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