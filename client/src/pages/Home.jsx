import { useState, useEffect } from "react";
import ArticleGallery from "../components/ArticleGallery/ArticleGallery";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Country from "../components/Country/Country";
import Grid from "../components/Grid/Grid";
const Home = () => {
  const [articles, setArticles] = useState([]);
  const fetchTheArticles = async () => {
    const response = await fetch("http://localhost:5000/articles");
    const data = await response.json();
    console.log(data, "this is the array");
    setArticles(data);
  };

  useEffect(() => {
    try {
      fetchTheArticles();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <ArticleGallery articlesFetched={articles} />
      <Featured />
      <Country />
      <Grid />
      <Footer />
    </>
  );
};

export default Home;
