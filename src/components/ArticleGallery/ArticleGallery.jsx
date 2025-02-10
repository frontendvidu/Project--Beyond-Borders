import ArticleBox from "../ArticleBox/ArticleBox";
import styles from "./ArticleGallery.module.css";
const ArticleGallery = () => {
  return (
    <div className={styles.galleryOuter}>
      {/* retrive articles from MongoDB */}
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />

      <button className={styles.btnGallery}>Load More</button>
    </div>
  );
};

export default ArticleGallery;
