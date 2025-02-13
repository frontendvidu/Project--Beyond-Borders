import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerOuter}>
      <div className={styles.upperFooterSection}>
        <div className={styles.footerAboutSection}>
          <div>
            <h3 className={styles.footerHeadings}>About US</h3>
            <p className={styles.footerParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <span className={styles.footerSpan}>
            <p className={styles.footerEmailPhone}>
              <span>Email:</span> info@beyondbordrs.com
            </p>
            <p className={styles.footerEmailPhone}>
              <span>Phone:</span> 1234567890
            </p>
          </span>
        </div>
        <nav>
          <h3 className={styles.footerHeadings}>Quick Link</h3>
          <a className={styles.footerNavLinks} href="">
            Home
          </a>
          <a className={styles.footerNavLinks} href="">
            About
          </a>
          <a className={styles.footerNavLinks} href="">
            Blog
          </a>
          <a className={styles.footerNavLinks} href="">
            Archived
          </a>
          <a className={styles.footerNavLinks} href="">
            Author
          </a>
          <a className={styles.footerNavLinks} href="">
            Contact
          </a>
        </nav>
        <nav>
          <h3 className={styles.footerHeadings}>Category</h3>
          <a className={styles.footerNavLinks} href="">
            Lifestyle
          </a>
          <a className={styles.footerNavLinks} href="">
            Technology
          </a>
          <a className={styles.footerNavLinks} href="">
            Travel
          </a>
          <a className={styles.footerNavLinks} href="">
            Business
          </a>
          <a className={styles.footerNavLinks} href="">
            Economy
          </a>
          <a className={styles.footerNavLinks} href="">
            Sports
          </a>
        </nav>
        <div className={styles.footerForm}>{/* form */}</div>
      </div>
      <div className={styles.lowerFooter}>
        <p>Lakshan Vidusen, All rights Reserved</p>
        <nav>
          <a href="">Terms of Use</a>
          <a href="">Privacy Policy</a>
          <a href="">Cookie Policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
