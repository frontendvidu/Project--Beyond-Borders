import ArticleBox from "../ArticleBox/ArticleBox";
import styles from "./ArticleGallery.module.css";
const ArticleGallery = (props) => {
  return (
    <div className={styles.galleryOuter}>
      {props.articlesFetched.map((a) => (
        <ArticleBox
          title={a.title}
          author={a.author}
          datePublished={a.publishedAt}
          contentParagraph={a.content}
        />
      ))}
      <button className={styles.btnGallery}>Load More</button>
    </div>
  );
};

export default ArticleGallery;
