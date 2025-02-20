import styles from "./Grid.module.css";
const FeaturedSide = (props) => {
  return (
    <div className={styles.featuredSideOuter}>
      <img src={props.previewImage} alt="pic" />
      <div className={styles.featuredSideInner}>
        <h3>{props.title}</h3>
        <p>{props.datePublish}</p>
      </div>
    </div>
  );
};

export default FeaturedSide;
