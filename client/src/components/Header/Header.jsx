import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.outerHeader}>
      <NavLink to="/">
        <img src="/images/logo.png" alt="LOGO" />
      </NavLink>
      <nav className={styles.navHeader}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/blogs/category/travel">DESTINATIONS</NavLink>
        <NavLink to="/blogs/category/sport">FOOD</NavLink>
        <NavLink to="/blogs/category/sport">SPORT</NavLink>
        <NavLink to="/blogs/category/food">FAMILY</NavLink>
        <NavLink to="/blogs/category/food">LIFESTYLE</NavLink>
      </nav>
      <form action="">
        <input type="search" />
      </form>
    </div>
  );
};

export default Header;
