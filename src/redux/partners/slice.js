import { createSlice } from "@reduxjs/toolkit";
import { 
  getIndicators, 
  getTeam, 
  getByIdPartnerTeam,
  saveTeam,
  restorePreviosTeam,
} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const partnersSlice = createSlice({
  name: "partners",
  initialState: {
    indicators: null,
    partner: null,
    history: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder =>
    builder
    .addCase(getIndicators.pending, handlePending)
    .addCase(getIndicators.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.indicators = action.payload;
    })
    .addCase(getIndicators.rejected, handleRejected)
    .addCase(getTeam.pending, handlePending)
    .addCase(getTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.history = [];
      state.partner = action.payload;
    })
    .addCase(getTeam.rejected, handleRejected)
    .addCase(getByIdPartnerTeam.pending, handlePending)
    .addCase(getByIdPartnerTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partner = action.payload;
    })
    .addCase(getByIdPartnerTeam.rejected, handleRejected)
    .addCase(saveTeam.fulfilled, (state, action) => {
      state.history.push(action.payload);
    })
    .addCase(restorePreviosTeam.fulfilled, (state, action) => {
      state.partner = action.payload;
      state.history.pop();
    })
});

export const partnersReducer = partnersSlice.reducer;