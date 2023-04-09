// import {
//     createSlice,
//     createSelector,
//     createAsyncThunk,
//   } from "@reduxjs/toolkit";
  
//   import { databases } from "../../appwrite/appConfig";
  
//   export const fetchList = createAsyncThunk(
//     "lists/fetchList",
//     async (_, thunkAPI) => {
//       try {
//         const response = await databases.listDocuments(
//             "641f1b21bd099595d29a",
//             "641f1be970ce133dfc0e");
//         return response.documents;
//       } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.message });
//       }
//     }
//   );
//   const initialState = {
//     lists: [],
//     singleList: "",
//     loading: "ideal",
//     error: "",
//   };
//   const mainListSlice = createSlice({
//     name: "lists",
//     initialState,
//     reducers: {
//       setLists: (state, action) => {
//         state.lists = action.payload;
//       },
//       setSingleList: (state, action) => {
//         state.singleList = action.payload;
//       },
//     },
//     extraReducers: (builder) => {
//       builder.addCase(fetchList.pending, (state) => {
//         state.lists = [];
//         state.loading = "loading";
//       });
//       builder.addCase(fetchList.fulfilled, (state, { payload }) => {
//         state.lists = payload;
//         state.loading = "loaded";
//       });
//       builder.addCase(fetchList.rejected, (state, action) => {
//         state.loading = "error";
//         state.error = action.error.message;
//       });
//     },
//   });
  
//   export const selectLists = createSelector(
//     (state) => ({
//       lists: state.mainListSlice.lists,
//       singleList: state.mainListSlice.singleList,
//       loading: state.mainListSlice.loading,
//     }),
//     (state) => state
//   );
  
//   export const { setLists , setSingleList} = mainListSlice.actions;
//   export default mainListSlice;
  