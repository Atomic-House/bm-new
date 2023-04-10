import {
    createSlice,
    createSelector,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  
  import { databases } from "../appwrite/appConfig";
import { Query } from "appwrite";

  
  export const fetchCard = createAsyncThunk(
    "cards/fetchCard",
    async (_, thunkAPI) => {
      try {
        const response = await databases.listDocuments(
            "641f1b21bd099595d29a",
            "641f1c0d4111fceddcc2",[
                Query.orderAsc("position")
            ]);
        return response.documents;
      } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    }
  );
  const initialState = {
    cards: [],
    loading: "ideal",
    error: "",
  };
  const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
      setCards: (state, action) => {
        state.cards = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCard.pending, (state) => {
        state.cards = [];
        state.loading = "loading";
      });
      builder.addCase(fetchCard.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.loading = "loaded";
      });
      builder.addCase(fetchCard.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
    },
  });
  
  export const selectCards = createSelector(
    (state) => ({
      cards: state.cardSlice.cards,
      loading: state.cardSlice.loading,
    }),
    (state) => state
  );
  
  export const { setCards } = cardSlice.actions;
  export default cardSlice;
  