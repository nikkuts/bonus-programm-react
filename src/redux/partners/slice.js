import { createSlice } from "@reduxjs/toolkit";
import { 
  getIndicators, 
  getPartners, 
  getByIdPartner,
  getPartnerTeam 
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
    indicators: {},
    partners: [],
    partner: null,
    partnerTeam: [],
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
    .addCase(getPartners.pending, handlePending)
    .addCase(getPartners.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partners = action.payload;
    })
    .addCase(getPartners.rejected, handleRejected)
    .addCase(getByIdPartner.pending, handlePending)
    .addCase(getByIdPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partner = action.payload;
    })
    .addCase(getByIdPartner.rejected, handleRejected)
    .addCase(getPartnerTeam.pending, handlePending)
    .addCase(getPartnerTeam.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partnerTeam = action.payload;
    })
    .addCase(getPartnerTeam.rejected, handleRejected)
});

export const partnersReducer = partnersSlice.reducer;