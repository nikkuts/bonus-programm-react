import { createSlice } from "@reduxjs/toolkit";
import { 
  getIndicators, 
  getFirstLinePartners, 
  getByIdPartner,
  getPartnerStructure 
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
    firstLinePartners: [],
    partner: null,
    partnerStructure: [],
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
    .addCase(getFirstLinePartners.pending, handlePending)
    .addCase(getFirstLinePartners.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.firstLinePartners = action.payload;
    })
    .addCase(getFirstLinePartners.rejected, handleRejected)
    .addCase(getByIdPartner.pending, handlePending)
    .addCase(getByIdPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partner = action.payload;
    })
    .addCase(getByIdPartner.rejected, handleRejected)
    .addCase(getPartnerStructure.pending, handlePending)
    .addCase(getPartnerStructure.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.partnerStructure = action.payload;
    })
    .addCase(getPartnerStructure.rejected, handleRejected)
});

export const partnersReducer = partnersSlice.reducer;