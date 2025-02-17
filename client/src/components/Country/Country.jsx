import { useNavigate } from "react-router-dom";
import styles from "./Country.module.css";
const Country = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.outerCategory}>
      <div className={styles.innerCategory}>
        <h2>Top Destinations</h2>
        <p>Tick one more of your bucket list and enjoy your life</p>
      </div>
      <div className={styles.innerButtons}>
        <button
          onClick={() => {
            navigate("/blogs/country/dominicanrepublic");
          }}
        >
          Dominican Republic
        </button>
        <button
          onClick={() => {
            navigate("/blogs/country/france");
          }}
        >
          France
        </button>
        <button
          onClick={() => {
            navigate("/blogs/country/china");
          }}
        >
          Republic of China
        </button>
        <button
          onClick={() => {
            navigate("/blogs/country/brazil");
          }}
        >
          Brazil
        </button>
      </div>
    </div>
  );
};

export default Country;
