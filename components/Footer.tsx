import styles from "styles/Footer.module.scss";
import Links from "./Links";

function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.upperText}>
        Living, learning, & leveling up one day at a time.
      </p>
      <div
        style={{
          margin: "30px 0",
        }}
      >
        <Links />
      </div>
      <p className={styles.bottomText}>Handcrafted by Rahul</p>
    </footer>
  );
}

export default Footer;
