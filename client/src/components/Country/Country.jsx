import styles from "./Country.module.css";
const Country = () => {
  return (
    <div className={styles.outerCategory}>
      <div className={styles.innerCategory}>
        <h2>Top Destinations</h2>
        <p>Tick one more of your bucket list and enjoy your life</p>
      </div>
      <div className={styles.innerButtons}>
        <button>Dominican Republic</button>
        <button>France</button>
        <button>Republic of China</button>
        <button>Brazil</button>
      </div>
    </div>
  );
};

export default Country;
