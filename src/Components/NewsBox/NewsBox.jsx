import styles from "./NewsBoxStyle.module.scss";
import {useEffect, useState} from "react";
import {api} from "../../Services/api/postApi";
import { useLocation, useHistory } from "react-router-dom";
const NewsBox = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const handleClick = (e, post) => {
    console.log(post)
    history.push({
      pathname: "/singlePost",
      state: { post },
    });
  }
  useEffect(async ()=> {
    try{
      const response = await api.getAll();
      const postArr = response.data.response.results;
      console.log(postArr)
      setPosts(postArr)
    } catch (e){
      console.log(e)
    }
  }, []);

  return (
    <div className="news-frame">
      {posts.map(post => {

        return (
          <article key={post.id} className={styles.box}>
            <div onClick={(e) => handleClick(e, post)} className={styles.img_box}>
              <img src={post.fields.thumbnail} alt="image description"/>
            </div>
            <div className={styles.box_description}>
              <h2>
                <div data-id={post.id} onClick={(e) => handleClick(e, post)}>{post.fields.headline}</div>
              </h2>
              {/*<p>{post.fields.bodyText.slice(0, 100)}...</p>*/}
              <p>{post.fields.trailText}</p>
              <div className={styles.sub_box}>
                <time>{post.fields.lastModified}</time>
                <a href="#">Read more</a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default NewsBox;