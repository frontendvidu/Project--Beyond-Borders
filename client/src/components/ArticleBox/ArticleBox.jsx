import styles from "./Articlebox.module.css";
import blogimage from "../../images/blogimage.png";
import author from "../../images/author.png";
const ArticleBox = (props) => {
  return (
    <div className={styles.outerArticleBox}>
      <img
        src={blogimage}
        alt="blog image"
        className={styles.imageArticleBox}
      />
      <h2>{props.title}</h2>
      <div className={styles.infoArticleBox}>
        <span>
          <img src={author} alt="author image" />
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
