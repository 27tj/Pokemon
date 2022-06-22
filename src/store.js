import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from "./reduers/userDataReducer";
export default configureStore({
  reducer: {
    UserDataReducer,
  },
});
