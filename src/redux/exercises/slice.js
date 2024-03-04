import { createSlice } from "@reduxjs/toolkit";
import { 
    getExercise,
    addExercise,
    updateExercise,
    deleteFile,
} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  exercise: {
      homework: '',
      fileURL: '',
  },
  isLoading: false,
  error: null,
}

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  extraReducers: builder =>
    builder
    .addCase(getExercise.pending, handlePending)
    .addCase(getExercise.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.exercise = action.payload || initialState.exercise;
    })
    .addCase(getExercise.rejected, handleRejected)
    .addCase(addExercise.pending, handlePending)
    .addCase(addExercise.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.exercise = action.payload;
    })
    .addCase(addExercise.rejected, handleRejected)
    .addCase(updateExercise.pending, handlePending)
    .addCase(updateExercise.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.exercise = action.payload;
    })
    .addCase(updateExercise.rejected, handleRejected)
    .addCase(deleteFile.pending, handlePending)
    .addCase(deleteFile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.exercise = action.payload;
    })
    .addCase(deleteFile.rejected, handleRejected)
});

export const exercisesReducer = exercisesSlice.reducer;