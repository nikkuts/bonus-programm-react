import { createSlice } from "@reduxjs/toolkit";

const lessonInitialState = {
  currentLesson: {},
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState: lessonInitialState,
  reducers: {
    changeLesson(state, action) {
      state.currentLesson = action.payload;
    },
  },
});

export const { changeLesson } = lessonSlice.actions;
export const lessonReducer = lessonSlice.reducer;