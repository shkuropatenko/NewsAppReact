import { useLocation } from 'react-router-dom';
import styles from "./PostStyle.module.scss";

const Post = () => {
  const { state: { post } } = useLocation();
  function createMarkup() {
    return {__html: post.fields.body};
  }

  return (
    <div>
      <div className={styles.visual}>
        <img src={post.fields.thumbnail} alt="image description"/>
      </div>
      <div className={styles.description}>
        <h1>{post.fields.headline}</h1>
        <div className={styles.sub_box}>
          <time>{post.fields.firstPublicationDate}</time>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
      {/*<div>{post.fields.body}</div>*/}
    </div>
  );
}

export default Post;