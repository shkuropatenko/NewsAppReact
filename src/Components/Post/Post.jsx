import {useHistory, useParams} from "react-router-dom";
import { useContext } from "react";
import context from "../../context";
import styles from "./PostStyle.module.scss";

const Post = () => {
  const { initPosts } = useContext(context);
  const { id } = useParams();
  const post = initPosts.find((item) => item.id === id);
  function createMarkup() {
    return {__html: post?.fields.body};
  }
  const parsdate = new Date(post?.fields.lastModified).toLocaleDateString("en-US");

  return (
    <div>
      <div className={styles.visual}>
        <img src={post?.fields.thumbnail} alt="image description"/>
      </div>
      <div className={styles.description}>
        <h1>{post?.fields.headline}</h1>
        <div className={styles.sub_box}>
          <time>{parsdate}</time>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>

    </div>
  );
}

export default Post;