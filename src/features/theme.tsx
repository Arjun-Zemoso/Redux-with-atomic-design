import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "#000000";
export const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: { value: initialStateValue } },
  reducers: {
    changeColor: (state, action) => {
      console.log(action.payload);
      state.theme.value = action.payload;
    },
  },
});
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
