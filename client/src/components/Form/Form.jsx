import { useState } from "react";
import styles from "./Form.module.css";
const Form = () => {
  const [email, setEmail] = useState("");
  function setEmailhandler(e) {
    setEmail(e.target.value);
  }
  const submitInputHandler = async (e) => {
    e.preventDefault();
    try {
      const sendEmail = await fetch("http://localhost:5000/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientEmail: email }),
      });
    } catch (e) {
      console.log(e, "error when POSTING email data");
    }
    setEmail("");
  };
  return (
    <div className={styles.formOuter}>
      <h3>Weekly Newsletter</h3>
      <p>Get blog articles and offers via email</p>
      <form onSubmit={submitInputHandler}>
        <input
          onChange={setEmailhandler}
          type="email"
          placeholder="Your Email"
          name="email"
          value={email}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Form;
