import styles from "./NewsBoxStyle.module.scss";
import {useEffect, useState, useContext} from "react";
import { api } from "../../Services/api/postApi";
import { useLocation, useHistory } from "react-router-dom";
import context from "../../context";

const NewsBox = () => {
  const {initPosts, setInitPosts, filteredPosts, setFilteredPosts} = useContext(context);

  const handleClick = (e, post) => {

    history.push({
      pathname: "/singlePost",
      state: { post },
    });
  }
  useEffect(async ()=> {
    try{
      const response = await api.getAll();
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