import { useState } from "react";
import SearchForm from "./InnerComponents/SearchForm/SearchForm";
import BurgerMenu from "./InnerComponents/BurgerMenu/BurgerMenu";
import styles from "./MainHeaderStyle.module.scss";


const MainHeader = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  // const handleClick = (e, item) => {
  //   console.log(item)
  // }

  return (
    <header className={styles.header}>
      <div className={styles.header_holder}>
        <div className={styles.header_frame}>
          <strong className={styles.logo}>
            <a href="/">News App</a>
          </strong>
          <SearchForm />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
}

export default MainHeader;