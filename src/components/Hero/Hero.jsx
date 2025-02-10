import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.heroOuter}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroH1}>INSPIRATION FOR TRAVEL BY REAL PEOPLE</h1>
        <p className={styles.heroParagraph}>Book smart, travel simple</p>
        <button className={styles.heroBtn}>Start planning your trip</button>
      </div>
    </div>
  );
}

export default Hero;
