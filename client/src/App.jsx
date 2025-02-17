import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import AllArticlesPage from "./pages/AllArticlesPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Navigate to="/blogs/all" />} />
        <Route path="/blogs/country/:variable" element={<AllArticlesPage />} />
        <Route path="/blogs/category/:variable" element={<AllArticlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
