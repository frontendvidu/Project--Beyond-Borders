import { useEffect, useState } from "react";
import ArticleGallery from "../ArticleGallery/ArticleGallery";

const AllArticles = (props) => {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const fetchArticles = async () => {
    try {
      console.log(props.urlParameter, " <- urlParameter in frontend"); // Check this value
      console.log("Type of urlParameter:", typeof props.urlParameter); // Output the type

      const dataFetchedJSON = await fetch(
        `http://localhost:5000/articles/${props.urlParameter}`
      );
      const filteredData = await dataFetchedJSON.json();
      console.log(filteredData, " <- filteredData"); // Check the structure
      console.log("Type of filteredData:", typeof filteredData); // Output the type

      setFilteredArticles(filteredData.countryBlogs);
    } catch (err) {
      console.log(err, " error when fetching filtered data");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [props.urlParameter]);

  return <ArticleGallery articlesFetched={filteredArticles} />;
};

export default AllArticles;
