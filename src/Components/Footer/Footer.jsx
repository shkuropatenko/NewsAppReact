import styles from "./FooterStyle.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <b>News App</b> 2021 copyright all rights reserved
      </div>
    </footer>
  );
}

export default Footer;