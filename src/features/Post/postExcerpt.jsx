import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import AddReactionButton from "./addReactionButton";
import { Link } from "react-router-dom";
const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <AddReactionButton post={post} />
    </article>
  );
};

export default PostExcerpt;
