import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
const createJobSlice = createSlice({
  name: "createjob",
  initialState,
  reducers: {
    addtoJobsList(state, action) {
      console.log(action.payload);
      state.data = [...state.data, action.payload];
    },
  },
});
export const { addtoJobsList } = createJobSlice.actions;
export default createJobSlice.reducer;
