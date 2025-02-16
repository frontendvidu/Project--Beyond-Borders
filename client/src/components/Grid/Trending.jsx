import styles from "./Grid.module.css";
const Trending = () => {
  return (
    <div className={styles.trendingOuter}>
      <img
        className={styles.trendingImage}
        src="/images/sidpicremove.png"
        alt=""
      />
      <div className={styles.featuredSideInner}>
        <h3>Akam Ge Kill: Season finale</h3>
        <p>21 March 2021</p>
      </div>
    </div>
  );
};

export default Trending;
