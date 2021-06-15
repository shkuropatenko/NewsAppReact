import { useLocation } from 'react-router-dom';

const Post = () => {
  const { state: { post } } = useLocation();
  return (
    <div>{post.fields.bodyText}</div>
  );
}

export default Post;