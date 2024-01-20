import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from '../../constants';

axios.defaults.baseURL = AXIOS_BASE_URL;

export const getIndicators = createAsyncThunk(
    "partners/getIndicators", 
    async (_, thunkAPI) => {
        try {
          const response = await axios.get("/api/partners/indicators"); 
          return response.data;
        } 
        catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getTeam = createAsyncThunk(
  "partners/getTeam", 
  async (_, thunkAPI) => {
      try {
        const response = await axios.get("/api/partners"); 
        return response.data;
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

  export const getByIdPartnerTeam = createAsyncThunk(
    "partners/getByIdPartnerTeam",
    async (partnerId, thunkAPI) => {
      try {
        const response = await axios.get(`/api/partners/${partnerId}`);
        return response.data; 
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const saveTeam = createAsyncThunk(
    "partners/saveTeam",
    (partner) => partner
  );

  export const restorePreviosTeam = createAsyncThunk(
    "partners/restorePreviosTeam",
    (partner) => partner
  );