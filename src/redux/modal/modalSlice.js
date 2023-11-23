import { createSlice } from "@reduxjs/toolkit";

const modalInitialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    toogleModal(state, action) {
      state.modal = !state.modal;
    },
  },
});

export const { toogleModal} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;