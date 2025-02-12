import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.outerHeader}>
      <img src="/images/logo.png" alt="LOGO" />
      <nav className={styles.navHeader}>
        <a href="">HOME</a>
        <a href="">DESTINATIONS</a>
        <a href="">FOOD</a>
        <a href="">SPORT</a>
        <a href="">FAMILY</a>
        <a href="">LIFESTYLE</a>
      </nav>
      <form action="">
        <input type="search" />
      </form>
    </div>
  );
};

export default Header;
