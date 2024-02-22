import { createSlice } from "@reduxjs/toolkit";
import { convertStartDate, convertEndDate } from "service/handleDate";

const rangeInitialState = {
    start: null,
    end: null,
    page: 1,
};

const rangeSlice = createSlice({
  name: "range",
  initialState: rangeInitialState,
  reducers: {
    changeRange(state, action) {
      state.start = action.payload.start;
      state.end = action.payload.end;
    },
    setCurrentRange(state, action) {
      state.start = convertStartDate(new Date());
      state.end = convertEndDate(new Date());
    },
    handlePagination(state, action) {
      state.page = action.payload;
    },
  },
});

export const { changeRange, setCurrentRange, handlePagination } = rangeSlice.actions;
export const rangeReducer = rangeSlice.reducer;