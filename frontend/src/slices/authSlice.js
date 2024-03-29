// set user credentials to localstorage and remove them
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => { //remove userinfo from localstorage to logout
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  },
});

export const { setCredentials , logout}= authSlice.actions;
export default authSlice.reducer; 