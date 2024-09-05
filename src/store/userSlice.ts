import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log('API url here = ', API_URL);
  const response = await fetch(`${API_URL}/users`);
  console.log('response = ', response);
  return (await response.json()) as User[];
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;
