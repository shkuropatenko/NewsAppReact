import { useState } from "react";
import { useContext } from "react";
import context from "../../../../context";

import styles from "./SearchFormStyle.module.scss";

const SearchForm = () => {
  const { initPosts, setFilteredPosts } = useContext(context);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      const filteredArr = initPosts.filter((post) =>
        post.webTitle.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filteredArr);
    } else {
      setFilteredPosts([]);
    }
  };

  const clearSearch = () => {
    setFilteredPosts(initPosts);
    setSearch("");
  };

  return (
    <form className={styles.search_form}>
      <button onClick={handleSearch} type="submit">
        <i className="icon-search-icon"></i>
      </button>
      <button onClick={clearSearch} className={search ? `${styles.clear_btn} ${styles.change}` : `${styles.clear_btn}`}>
        <span></span>
        <span></span>
      </button>
      <input onChange={handleChange} type="search" placeholder="Type something to start search" />
    </form>
  );
}

export default SearchForm;