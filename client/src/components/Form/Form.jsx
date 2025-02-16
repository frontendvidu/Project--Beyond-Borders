import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.formOuter}>
      <h3>Weekly Newsletter</h3>
      <p>Get blog articles and offers via email</p>
      <form action="">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Form;
