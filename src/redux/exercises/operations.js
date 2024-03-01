import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {AXIOS_BASE_URL} from '../../constants';

axios.defaults.baseURL = AXIOS_BASE_URL;

  export const getExercise = createAsyncThunk(
    "exercises/getExercise",
    async (params, thunkAPI) => {
      const searchParams = new URLSearchParams(params);
      try {
        const response = await axios.get(
          `/api/exercises?${searchParams.toString()}`
        );
        return response.data; 
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addExercise = createAsyncThunk(
    "exercises/addExercise",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post("/api/exercises", credentials);
        return response.data; 
      } 
      catch (error) {
        alert(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const updateExercise = createAsyncThunk(
    "exercises/updateExercise",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.patch("/api/exercises", credentials);
        return response.data; 
      } 
      catch (error) {
        alert(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const deleteFile = createAsyncThunk(
    "exercises/deleteFile",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.patch("/api/exercises/file", credentials);
        return response.data; 
      } 
      catch (error) {
        alert(error.response.data.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );