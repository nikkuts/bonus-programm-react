import { createSlice } from "@reduxjs/toolkit";
import { 
    getDonats,
    getSubscriptions,
    getByIdSubscription,
    cancelSubscribe, 
} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    donats: [],
    subscriptions: [],
    subscription: null,
    isUnsubscribe: false,
    isLoading: false,
    error: null
  },
  extraReducers: builder =>
    builder
    .addCase(getDonats.pending, handlePending)
    .addCase(getDonats.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.donats = action.payload.donats;
    })
    .addCase(getDonats.rejected, handleRejected)
    .addCase(getSubscriptions.pending, handlePending)
    .addCase(getSubscriptions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.subscriptions = action.payload;
    })
    .addCase(getSubscriptions.rejected, handleRejected)
    .addCase(getByIdSubscription.pending, handlePending)
    .addCase(getByIdSubscription.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.subscription = action.payload;
    })
    .addCase(getByIdSubscription.rejected, handleRejected)
    .addCase(cancelSubscribe.pending, handlePending)
    .addCase(cancelSubscribe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.isUnsubscribe = true;
    })
    .addCase(cancelSubscribe.rejected, handleRejected)
});

export const paymentsReducer = paymentsSlice.reducer;