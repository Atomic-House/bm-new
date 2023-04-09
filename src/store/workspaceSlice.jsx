// import {
//     createSlice,
//     createSelector,
//     createAsyncThunk,
//   } from "@reduxjs/toolkit";
  
//   import { databases } from "../../appwrite/appConfig";
  
//   export const fetchWorkspace = createAsyncThunk(
//     "workspaces/fetchWorkspace",
//     async (_, thunkAPI) => {
//       try {
//         const response = await databases.listDocuments(
//             "641f1b21bd099595d29a",
//             "641f1b4a279dbbe08c1b")
//         return response.documents;
//       } catch (error) {
//         return thunkAPI.rejectWithValue({ error: error.message });
//       }
//     }
//   );
//   const initialState = {
//     workspaces: [],
//     singlews: "",
//     loading: "ideal",
//     error: "",
//   };
//   const workspaceSlice = createSlice({
//     name: "workspaces",
//     initialState,
//     reducers: {
//       setWorkspaces: (state, action) => {
//         state.workspaces = action.payload;
//       },
//       setSinglews: (state, action) => {
//         state.singlews = action.payload;
//       },
//     },
//     extraReducers: (builder) => {
//       builder.addCase(fetchWorkspace.pending, (state) => {
//         state.workspaces = [];
//         state.loading = "loading";
//       });
//       builder.addCase(fetchWorkspace.fulfilled, (state, { payload }) => {
//         state.workspaces = payload;
//         state.loading = "loaded";
//       });
//       builder.addCase(fetchWorkspace.rejected, (state, action) => {
//         state.loading = "error";
//         state.error = action.error.message;
//       });
//     },
//   });
  
//   export const selectWorkspaces = createSelector(
//     (state) => ({
//       workspaces: state.workspaceSlice.workspaces,
//       loading: state.workspaceSlice.loading,
//       singlews: state.workspaceSlice.singlews,
//     }),
//     (state) => state
//   );
  
//   export const { setWorkspaces, setSinglews } = workspaceSlice.actions;
//   export default workspaceSlice;
  