import PostList from "./features/Post/postsList";
import AddPostForm from "./features/Post/addPostForm";
import SinglePostPage from "./features/Post/singlePostPage";
import Layout from "./components/layout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import EditPostForm from "./features/Post/EditPostForm.jsx";
import UserPage from "./features/User/userPage";
import UserList from "./features/User/userList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PostList /> },
      {
        path: "post",
        children: [
          { index: true, element: <AddPostForm /> },
          { path: ":postId", element: <SinglePostPage /> },
          { path: "edit/:postId", element: <EditPostForm /> },
        ],
      },
      {
        path: "user",
        children: [
          { index: true, element: <UserList /> },
          { path: ":userId", element: <UserPage /> },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
