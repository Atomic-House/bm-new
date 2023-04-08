import {
    createSlice,
    createSelector,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  
  import { databases } from "../../appwrite/appConfig";
  
  export const fetchBoard = createAsyncThunk(
    "boards/fetchBoard",
    async (_, thunkAPI) => {
      try {
        const response = await databases.listDocuments(
            "641f1b21bd099595d29a",
            "641f1b9f910470b57a64");
        return response.documents;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );
  const initialState = {
    boards: [],
    singleBoard: "",
    loading: "ideal",
    error: "",
  };
  const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
      setBoards: (state, action) => {
        state.boards = action.payload;
      },
      setSingleBoard: (state, action) => {
        state.singleBoard = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchBoard.pending, (state) => {
        state.boards = [];
        state.loading = "loading";
      });
      builder.addCase(fetchBoard.fulfilled, (state, { payload }) => {
        state.boards = payload;
        state.loading = "loaded";
      });
      builder.addCase(fetchBoard.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
    },
  });
  
  export const selectBoards = createSelector(
    (state) => ({
      boards: state.boardSlice.boards,
      loading: state.boardSlice.loading,
      singleBoard: state.boardSlice.singleBoard,
    }),
    (state) => state
  );
  
  export const { setBoards , setSingleBoard} = boardSlice.actions;
  export default boardSlice;
  