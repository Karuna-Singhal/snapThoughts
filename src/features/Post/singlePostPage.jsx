import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import PostAuthour from "./postAuthor";
import TimeAgo from "./TimeAgo";
import AddReactionButton from "./addReactionButton";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  // console.log(postId);
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post Not Found 😌!!!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthour userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <AddReactionButton post={post} />
    </article>
  );
};

export default SinglePostPage;
