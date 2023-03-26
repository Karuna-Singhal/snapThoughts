import { useSelector } from "react-redux";
import { selectAllPosts, getPostError, getPostStatus } from "./postSlice";
import PostExcerpt from "./postExcerpt";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostStatus);
  const error = useSelector(getPostError);

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
  return <section>{content}</section>;
};

export default PostList;
