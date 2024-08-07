import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  refreshToken: "",
  status: "idle",
};
export const tokenSlice = createSlice({
  name: "token", //type action: name/action (counter/increment)
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

