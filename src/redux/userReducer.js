import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    id:null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
    
      state.isFetching = false;
      const {username,_id}=action.payload
      console.log(username)
      state.currentUser = username;
      state.id=_id;
      
     
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;