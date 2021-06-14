import styles from "./NewsBoxStyle.module.scss";

const NewsBox = () => {

  return (
    <article className={styles.box}>
      <a href="#" className={styles.img_box}>
        <img src="" alt="image description"/>
      </a>
      <div className={styles.box_description}>
        <h2>
          <a href="#">long established</a>
        </h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
        <div className={styles.sub_box}>
          <time>May 20th 2020</time>
          <a href="#">Read more</a>
        </div>
      </div>
    </article>
  );
}

export default NewsBox;