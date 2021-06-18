import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { linkHeader } from "../../../../constants";
import context from "../../../../context";
import { loadPosts } from "../../../../Services/api/postApi";
import styles from "./BurgerMenuStyle.module.scss";

const BurgerMenu = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const history = useHistory();
  const location = useLocation();

  const {initPosts, setInitPosts, filteredPosts, setFilteredPosts} = useContext(context);

  const handleClick = (e, search) => {
    loadPosts(search).then(result => {
      const filteredArr = result.data.response.results;
      setInitPosts(filteredArr);
      setFilteredPosts(filteredArr);
      console.log(filteredArr)
      if (location.pathname !== "/") {
        history.push('/')
      }
    });
  }

  return (
    <>
      <div className={isActive ? `${styles.menu}` : `${styles.menu} ${styles.show}`}>
        <ul className={styles.nav}>
          <li>
            <a href="#">Categories</a>
            <div className={styles.drop_holder}>
              <ul>
                {linkHeader.map((item, index) => {
                  return (
                    <li key={index}>
                      <a onClick={(e)=> handleClick(e, item)} href="#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li>
            <a href="#" onClick={(e)=> handleClick(e, "trending")}>⚡️ Trending news</a>
          </li>
        </ul>
      </div>
      <button className={isActive ? `${styles.burger_button}` : `${styles.burger_button} ${styles.open}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}

export default BurgerMenu;