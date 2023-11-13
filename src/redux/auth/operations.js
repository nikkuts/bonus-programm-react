import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bonus-programm-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/register', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      setAuthHeader(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Email or password is incorrect.',
      });
    }
  }
);

export const logOut = createAsyncThunk(
  '/logout', 
  async (_, thunkAPI) => {
  try {
    await axios.post('/api/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  '/refreshUser', 
  async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/api/auth/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk(
//     'auth/register',
//     async (credentials, thunkAPI) => {
//       try {
//         const res = await axios.post('/users/signup', credentials);
//         setAuthHeader(res.data.token);
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

//   export const logIn = createAsyncThunk(
//     'auth/login',
//     async (credentials, thunkAPI) => {
//       try {
//         const res = await axios.post('/users/login', credentials);
//         setAuthHeader(res.data.token);
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

//   export const logOut = createAsyncThunk(
//     'auth/logout', 
//     async (_, thunkAPI) => {
//       try {
//         await axios.post('/users/logout');
//         clearAuthHeader();
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );

//   export const refreshUser = createAsyncThunk(
//     'auth/refresh',
//     async (_, thunkAPI) => {
//       const state = thunkAPI.getState();
//       const persistedToken = state.auth.token;
  
//       if (persistedToken === null) {
//         return thunkAPI.rejectWithValue('Unable to fetch user');
//       }
  
//       try {
//         setAuthHeader(persistedToken);
//         const res = await axios.get('/users/current');
//         return res.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//       }
//     }
//   );