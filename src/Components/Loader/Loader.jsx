import styles from "./LoaderStyle.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}>...LOADING...</div>
    </div>
  );
};

export default Loader;