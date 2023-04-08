import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {account} from "../appwrite/appConfig"

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const LoginUsers = createAsyncThunk(
  "users/LoginUsers",
  async (email, password) => {
    try {
      const response = await account.createEmailSession(email, password);
      // If you want to get something back
      return response;
    } catch (err) {
      console.error(err.message)
    }
  }
);

const initialState = {
  users: [],
  loading: "ideal",
  error: "",
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.users = [];
      state.loading = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
      state.loading = "loaded";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = "error";
      state.error = action.error.message;
    });
  },
});

export const selectUser = createSelector(
  (state) => ({
    users: state.userSlice.users,
    loading: state.userSlice.loading,
  }),
  (state) => state
);

export const { setUsers } = userSlice.actions;
export default userSlice;
