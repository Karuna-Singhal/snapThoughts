import { useSelector } from "react-redux";
import { selectPostIds, getPostError, getPostStatus } from "./postSlice";
import PostExcerpt from "./postExcerpt";

const PostList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const status = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  let content;
  if (status === "loading") {
    content = <p>"Loading..."</p>;
  } else if (status === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return <section>{content}</section>;
};

export default PostList;
