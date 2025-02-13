import styles from "./Articlebox.module.css";
const ArticleBox = (props) => {
  return (
    <div className={styles.outerArticleBox}>
      <img
        src={props.imageBlog}
        alt="blog image"
        className={styles.imageArticleBox}
      />
      <h2>{props.title}</h2>
      <div className={styles.infoArticleBox}>
        <span>
          <img
            src={props.imageAuthor}
            alt="author image"
            className={styles.authorImage}
          />
          <p className={styles.authorArticleBox}>{props.author}</p>
        </span>
        <p className={styles.dateArticleBox}>{props.datePublished}</p>
      </div>
      <p className={styles.summaryArticleBox}>{props.contentParagraph}</p>
      <button className={styles.buttonArticleBox}>View Post</button>
    </div>
  );
};

export default ArticleBox;
