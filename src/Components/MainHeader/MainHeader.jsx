import { useState } from "react";
import SearchForm from "./InnerComponents/SearchForm/SearchForm";
import { linkHeader } from "../../constants";
import styles from "./MainHeaderStyle.module.scss";


const MainHeader = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClick = (e, item) => {
    console.log(item)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_holder}>
        <strong className={styles.logo}>
          <a href="/">News App</a>
        </strong>
        <SearchForm />
        <button className={isActive ? `${styles.burger_button} ${styles.open}` : `${styles.burger_button}`} onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={isActive ? `${styles.menu} ${styles.show}` : `${styles.menu}`}>
          <ul className={styles.nav}>
            <li>
              <a href="#">Categories</a>
              <div className={styles.drop_holder}>
                <ul>
                  {linkHeader.map(item => {
                    return (
                      <li>
                        <a onClick={(e)=> handleClick(e, item)} href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <a href="#">⚡️ Trending news</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;