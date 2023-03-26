import PostList from "./features/Post/postsList";
import AddPostForm from "./features/Post/addPostForm";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/Post/singlePostPage";
import Layout from "./components/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditPostForm from "./features/Post/EditPostForm.jsx";

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
