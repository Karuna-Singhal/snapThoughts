import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/Post/postSlice";
import useReducer from "../features/User/userSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: useReducer,
  },
});

export default store;
