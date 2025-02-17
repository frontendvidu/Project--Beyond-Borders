import { useNavigate } from "react-router-dom";
import ArticleBox from "../ArticleBox/ArticleBox";
import styles from "./ArticleGallery.module.css";
const ArticleGallery = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.galleryOuter}>
      <div className={styles.galleryBlogOuter}>
        {props.articlesFetched.map((a) => (
          <ArticleBox
            title={a.title}
            author={a.author}
            datePublished={a.publishedAt}
            contentParagraph={a.content}
            imageBlog={a.blogImage}
            imageAuthor={a.authorImage}
          />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/blogs/all");
        }}
        className={styles.btnGallery}
      >
        Load More
      </button>
    </div>
  );
};

export default ArticleGallery;
