import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchPosts,
} from "./postSlice";
import PostExcerpt from "./postExcerpt";
import { useEffect } from "react";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostList;
