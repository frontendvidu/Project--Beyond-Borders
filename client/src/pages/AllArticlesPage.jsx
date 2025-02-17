import { useParams } from "react-router-dom";
import AllArticles from "../components/AllArticles/AllArticle";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const AllArticlesPage = () => {
  const { variable } = useParams();
  console.log(variable, " useparams");
  return (
    <>
      <Header />
      <AllArticles urlParameter={variable} />
      <Footer />
    </>
  );
};

export default AllArticlesPage;
