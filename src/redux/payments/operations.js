import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from '../../constants';

axios.defaults.baseURL = AXIOS_BASE_URL;

export const getDonats = createAsyncThunk(
    "payments/getDonats", 
      async (params, thunkAPI) => {
        const searchParams = new URLSearchParams(params);
        // searchParams.forEach((value, key) => {
        //   if (value === '') {
        //     searchParams.delete(key);
        //   }
        // });
        try {
          const response = await axios.get(
            `/api/payments/donats?${searchParams.toString()}`
          ); 
          return response.data;
        } 
        catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getSubscriptions = createAsyncThunk(
  "payments/getSubscriptions", 
    async (params, thunkAPI) => {
      const searchParams = new URLSearchParams(params);
      // searchParams.forEach((value, key) => {
      //   if (value === '') {
      //     searchParams.delete(key);
      //   }
      // });
      try {
        const response = await axios.get(
          `/api/payments/subscriptions?${searchParams.toString()}`
        ); 
        return response.data;
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
  }
);

  export const getByIdSubscription = createAsyncThunk(
    "payments/getByIdSubscription",
    async (subscriptionId, thunkAPI) => {
      try {
        const response = await axios.get(`/api/payments/subscriptions/${subscriptionId}`);
        return response.data; 
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const cancelSubscribe = createAsyncThunk(
    "payments/cancelSubscribe",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post("/api/payments/unsubscribe", credentials);
        return response.data; 
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
