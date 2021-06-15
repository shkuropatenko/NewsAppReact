import { useState } from "react";
import SearchForm from "./InnerComponents/SearchForm/SearchForm";
import { linkHeader } from "../../constants";
import styles from "./MainHeaderStyle.module.scss";


const MainHeader = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={isActive ? "app active" : "app"}>
        <h1>Hello react</h1>
        <button onClick={handleToggle}>Toggle class</button>
        <ul>
          {linkHeader.map(item => {
            return (
              <li>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>

      </div>
      <div className={styles.header_holder}>
        <strong className={styles.logo}>
          <a href="/">News App</a>
        </strong>
        <SearchForm />
      </div>
    </header>
  );
}

export default MainHeader;