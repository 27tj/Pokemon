import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from "./reduers/userDataReducer";
import { loadState } from "./localStorage";
export default configureStore({
  reducer: {
    UserDataReducer,
  },
});
