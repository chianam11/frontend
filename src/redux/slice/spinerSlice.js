import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onSpinerState: false,
};

export const spinerEl = createSlice({
  name: "spiner",
  initialState,
  reducers: {
    onSpiner: (state, action) => {
      state.onSpinerState = action.payload;
    },
  },
});
