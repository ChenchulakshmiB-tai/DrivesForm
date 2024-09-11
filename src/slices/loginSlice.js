import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userType: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "validate",
  initialState,
  reducers: {
    loginRequest(state,action) {
      state.loading = true;
      state.error = false;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.userType = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginFailure, loginSuccess, clearState } =
  loginSlice.actions;
export default loginSlice.reducer;
