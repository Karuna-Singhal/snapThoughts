import PostAuthor from "./postAuthor";
import TimeAgo from "./timeAgo";
import AddReactionButton from "./addReactionButton";
const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <AddReactionButton post={post} />
    </article>
  );
};

export default PostExcerpt;
