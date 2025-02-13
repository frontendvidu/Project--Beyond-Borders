import styles from "./Featured.module.css";
const Featured = () => {
  return (
    <div className={styles.featuredOuter}>
      <div className={styles.featuredInner}>
        <div>Travel</div>
        <h2>We plan the trip for you</h2>
        <p>Go enjoy and leave the burden for us.</p>
        <button>Start planning your trip</button>
      </div>
    </div>
  );
};

export default Featured;
