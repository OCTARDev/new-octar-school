import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user:null,
    userIP:null,
    accessToken:"",
    initialized:false

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser:(state,action)=>{
      
      const {token , user} = action.payload;
      state.user = user;
      state.accessToken = token;
      state.initialized = true;
    },
    logOut:(state)=>{
      state.user = null
      state.accessToken = null;
      state.initialized = true;
      // Remove the user cookie
      Cookies.remove("user", { path: "/" });
    },
    setInitialized(state) {
      state.initialized = true;
    },
    setIP :(state,action)=>{      
      state.userIP = action.payload;
    }
  },
});

export const { setUser , logOut , setInitialized ,setIP} = userSlice.actions;
export default userSlice.reducer;