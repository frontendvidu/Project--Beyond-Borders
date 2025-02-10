import styles from "./Articlebox.module.css";
import blogimage from "../../images/blogimage.png";
import author from "../../images/author.png";
const ArticleBox = () => {
  return (
    <div className={styles.outerArticleBox}>
      <img
        src={blogimage}
        alt="blog image"
        className={styles.imageArticleBox}
      />
      <h2>Inter Mascenus Eget Viverra</h2>
      <div className={styles.infoArticleBox}>
        <span>
          <img src={author} alt="author image" />
          <p className={styles.authorArticleBox}>Joanna willink</p>
        </span>
        <p className={styles.dateArticleBox}>18-07-2010</p>
      </div>
      <p className={styles.summaryArticleBox}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aut
        labore culpa, totam iste nesciunt vitae, consectetur sit aliquam
        corporis, unde assumenda.
      </p>
      <button className={styles.buttonArticleBox}>View Post</button>
    </div>
  );
};

export default ArticleBox;
