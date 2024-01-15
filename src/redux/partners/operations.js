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

export const getPartners = createAsyncThunk(
  "partners/getPartners", 
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

  export const getByIdPartner = createAsyncThunk(
    "partners/getByIdPartner",
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

  export const getPartnerTeam = createAsyncThunk(
    "partners/getPartnerTeam",
    async (partnerId, thunkAPI) => {
      try {
        const response = await axios.get(`/api/partners/${partnerId}/team`);
        return response.data; 
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );