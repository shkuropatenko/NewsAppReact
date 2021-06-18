import { useState } from "react";
import { linkHeader } from "../../../../constants";
import styles from "./BurgerMenuStyle.module.scss";

const BurgerMenu = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleClick = (e, item) => {
    console.log(item)
  }

  return (
    <>
      <div className={isActive ? `${styles.menu}` : `${styles.menu} ${styles.show}`}>
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