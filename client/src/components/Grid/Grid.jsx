import { useEffect, useState } from "react";
import FeaturedSide from "./FeaturedSide";
import styles from "./Grid.module.css";
const Grid = (props) => {
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("travel");

  useEffect(() => {
    setAllArticles(props.fetchedArticles);
  }, [props.fetchedArticles]);

  const travelHandler = () => {
    setActiveCategory("travel");
    const travelArticles = allArticles.filter((i) => i.category === "travel");
    setDisplayedArticles(travelArticles.slice(0, 5));
  };

  const animalHandler = () => {
    setActiveCategory("animals");
    const animalArticles = allArticles.filter((i) => i.category == "animals");
    setDisplayedArticles(animalArticles.slice(0, 5));
  };

  const hotelsHandler = () => {
    setActiveCategory("hotels");
    const hotelsArrticles = allArticles.filter((i) => i.category == "hotels");
    setDisplayedArticles(hotelsArrticles.slice(0, 5));
  };

  const foodHandler = () => {
    setActiveCategory("food");
    const foodArticles = allArticles.filter((i) => i.category == "food");
    setDisplayedArticles(foodArticles.slice(0, 5));
  };

  useEffect(() => {
    travelHandler();
  }, [allArticles]);
  return (
    <div className={styles.gridOuter}>
      <nav className={styles.gridNav}>
        <button
          onClick={travelHandler}
          className={activeCategory == "travel" ? styles.active : ""}
        >
          Travel
        </button>
        <button
          onClick={animalHandler}
          className={activeCategory == "animals" ? styles.active : ""}
        >
          Animals
        </button>
        <button
          onClick={hotelsHandler}
          className={activeCategory == "hotels" ? styles.active : ""}
        >
          Hotels
        </button>
        <button
          onClick={foodHandler}
          className={activeCategory == "food" ? styles.active : ""}
        >
          Food
        </button>
      </nav>
      <div className={styles.featuredDiv}>
        <div className={styles.featuredMain}>
          <img src={displayedArticles[0]?.blogImage} />
          <p>{displayedArticles[0]?.publishedAt}</p>
          <h4>{displayedArticles[0]?.title}</h4>
          <p>{displayedArticles[0]?.content}</p>
          <button>View Post</button>
        </div>
        <div className={styles.featuredSide}>
          {displayedArticles.slice(1, 5).map((article) => {
            return (
              <FeaturedSide
                key={article.id}
                title={article.title}
                datePublish={article.publishedAt}
                previewImage={article.previewImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
