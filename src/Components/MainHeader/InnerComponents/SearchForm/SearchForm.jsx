import styles from "./SearchFormStyle.module.scss";

const SearchForm = () => {

  return (
    <form className={styles.search_form}>
      <button type="submit">
        <i className="icon-search-icon"></i>
      </button>
      <input type="search" placeholder="Type something to start search" />
    </form>
  );
}

export default SearchForm;