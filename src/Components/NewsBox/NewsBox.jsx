import { useEffect, useContext, useState } from "react";
import { loadPosts } from "../../Services/api/postApi";
import { useHistory } from "react-router-dom";
import context from "../../context";
import Loader from "../Loader/Loader";
import styles from "./NewsBoxStyle.module.scss";

const NewsBox = () => {
  const { setInitPosts, filteredPosts, setFilteredPosts } = useContext(context);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnchorVisible, setIsAnchorVisible] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 200) {
      setIsAnchorVisible(true);
    } else {
      setIsAnchorVisible(false);
    }
  };

  const toTop = () => {
    setIsAnchorVisible(false);
    window.scrollTo({ top: 0 });
  };

  useEffect(async ()=> {
    try{
      setIsLoading(true);
      const response = await loadPosts();
      const postArr = response.data.response.results;

      const filteredByDatePost = postArr.sort((a, b) => {
        if(a.fields.lastModified > b.fields.lastModified) {
          return -1
        } else {
          return 1
        }
      }) || [];
      setInitPosts(filteredByDatePost);
      setFilteredPosts(filteredByDatePost);
      setIsLoading(false);
    } catch (e){
      setIsLoading(false);
      console.log(e)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setFilteredPosts, setInitPosts]);

  const history = useHistory();

  const redirectToPost = (e, id) => {
    history.push({
      pathname: `/post/${id}`,
    });
  };

  return (
    <div className="news-frame">

      {filteredPosts.map(post => {
        const parsdate = new Date(post.fields.lastModified).toLocaleDateString("en-US");
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
                <time>{parsdate}</time>
                <a href={post.fields.shortUrl} target="_blank">Read more</a>
              </div>
            </div>
          </article>
        );
      })}
      {isLoading && <Loader />}
      {isAnchorVisible && (
        <div className="top-anchor" onClick={toTop}>
          TO TOP
        </div>
      )}
    </div>
  );
}

export default NewsBox;