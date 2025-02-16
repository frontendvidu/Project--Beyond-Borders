import FeaturedSide from "./FeaturedSide";
import Trending from "./Trending";
import styles from "./Grid.module.css";
const Grid = () => {
  return (
    <div className={styles.gridOuter}>
      <nav className={styles.gridNav}>
        <a href="">Travel</a>
        <a href="">Animals</a>
        <a href="">Hotels</a>
        <a href="">Food</a>
      </nav>
      <div className={styles.featuredDiv}>
        <div className={styles.featuredMain}>
          <img src="/images/postpicremove.png" alt="" />
          <p>1 month ago</p>
          <h4>Tick one more destination</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            illum obcaecati vitae{" "}
          </p>
          <button>View Post</button>
        </div>
        <div className={styles.featuredSide}>
          <FeaturedSide />
          <FeaturedSide />
          <FeaturedSide />
          <FeaturedSide />
        </div>
      </div>
    </div>
  );
};

export default Grid;
