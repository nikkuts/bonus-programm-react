import { createSlice } from "@reduxjs/toolkit";
import { convertStartDate, convertEndDate } from "service/handleDate";

// const start = convertStartDate(new Date().toISOString());
// const end = convertEndDate(new Date().toISOString());

const rangeInitialState = {
    start: null,
    end: null,
};

const rangeSlice = createSlice({
  name: "range",
  initialState: rangeInitialState,
  reducers: {
    changeRange(state, action) {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
    resetInitialState(state, action) {
      state.start = convertStartDate(new Date().toISOString());
      state.end = convertEndDate(new Date().toISOString());
      // return rangeInitialState;;
    },
  },
});

export const { changeRange, resetInitialState } = rangeSlice.actions;
export const rangeReducer = rangeSlice.reducer;