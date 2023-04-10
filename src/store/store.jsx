import { configureStore } from "@reduxjs/toolkit";
// import productsSlice from "./productsSlice";
// import workspaceSlice from "./workspaceSlice";
// import boardSlice from "./boardSlice";
import mainListSlice from "./mainListSlice";
import cardSlice from "./cardSlice";
import userSlice from "./userSlice";


export const store = configureStore({
  reducer: {
    // productsSlice: productsSlice.reducer,
    userSlice: userSlice.reducer,
    // workspaceSlice: workspaceSlice.reducer,
    // boardSlice: boardSlice.reducer,
    mainListSlice: mainListSlice.reducer,
    cardSlice: cardSlice.reducer,
  },
});
