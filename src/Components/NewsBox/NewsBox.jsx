import { useEffect, useContext } from "react";
import { loadPosts } from "../../Services/api/postApi";
import { useHistory } from "react-router-dom";
import context from "../../context";
import styles from "./NewsBoxStyle.module.scss";

const NewsBox = () => {
  const { setInitPosts, filteredPosts, setFilteredPosts } = useContext(context);

  useEffect(async ()=> {
    try{
      const response = await loadPosts();
      const postArr = response.data.response.results;
      setInitPosts(postArr);
      setFilteredPosts(postArr);
    } catch (e){
      console.log(e)
    }
  }, []);

  const history = useHistory();

  const redirectToPost = (e, id) => {
    history.push({
      pathname: `/post/${id}`,
    });
  };

  return (
    <div className="news-frame">

      {filteredPosts.map(post => {
        return (
          <article key={post.id} className={styles.box}>
            <div onClick={(e) => redirectToPost(e, post.id)} className={styles.img_box}>
              <img src={post.fields.thumbnail} alt="image description"/>
            </div>
            <div className={styles.box_description}>
              <h2>
                <div onClick={(e) => redirectToPost(e, post.id)}>{post.fields.headline}</div>
              </h2>
              <p>{post.fields.trailText}</p>
              <div className={styles.sub_box}>
                <time>{post.fields.lastModified}</time>
                <a href={post.fields.shortUrl} target="_blank">Read more</a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default NewsBox;