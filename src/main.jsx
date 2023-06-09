import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/User/userSlice";
import { fetchPosts } from "./features/Post/postSlice";
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
