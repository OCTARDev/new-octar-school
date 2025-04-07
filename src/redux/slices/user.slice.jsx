import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user:null,
    accessToken:"",
    initialized:false,
    dashboard:{
      isExpanded:false
    }

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
      Cookies.remove("user");
      /* window.location.reload(); */
    },
    setInitialized(state) {
      state.initialized = true;
    },
    expandSidebar:(state)=>{
      state.dashboard.isExpanded = !state.dashboard.isExpanded;
    }
  },
});

export const { setUser , logOut , setInitialized , expandSidebar } = userSlice.actions;
export default userSlice.reducer;