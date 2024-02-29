import { createSlice } from "@reduxjs/toolkit";
import { 
    getExercise,
    addExercise,
    updateExercise,
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
  error: null
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
      // state.exercise = !action.payload.fileURL ? 
      // {...action.payload, fileURL: null} :
      // action.payload;
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
    // .addCase(getByIdSubscription.pending, handlePending)
    // .addCase(getByIdSubscription.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.subscription = action.payload;
    // })
    // .addCase(getByIdSubscription.rejected, handleRejected)
    // .addCase(cancelSubscribe.pending, handlePending)
    // .addCase(cancelSubscribe.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const {orderId} = action.payload;
    //   const index = state.subscriptions.findIndex(
    //     ({data}) => data.order_id === orderId
    //   );
    //   if (index !== -1) {
    //     state.subscriptions[index].objSub.isUnsubscribe = true;
    //   }
    // })
    // .addCase(cancelSubscribe.rejected, handleRejected)
    // .addCase(getAccount.pending, handlePending)
    // .addCase(getAccount.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.account = action.payload.account;
    //   state.totalPages = action.payload.totalPages;
    // })
    // .addCase(getAccount.rejected, handleRejected)
});

export const exercisesReducer = exercisesSlice.reducer;