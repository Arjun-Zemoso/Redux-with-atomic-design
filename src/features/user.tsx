import { createSlice } from "@reduxjs/toolkit";

export interface stateInterface {
  user: {
    user: { value: { name: string; age: number; email: string } };
  };
  theme: {
    theme: { value: string };
  };
}

const initialStateValue = { name: "", age: 0, email: "" };
export const userSlice = createSlice({
  name: "user",
  initialState: { user: { value: initialStateValue } },
  reducers: {
    login: (state, action) => {
      state.user.value = action.payload;
    },
    logout: (state) => {
      state.user.value = initialStateValue;
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
