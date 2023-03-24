import PostList from "./features/Post/postsList";
import AddPostForm from "./features/Post/addPostForm";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
