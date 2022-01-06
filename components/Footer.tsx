import styles from "styles/Footer.module.scss";
import SocialLink from "./SocialLink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.upperText}>
        Living, learning, & leveling up one day at a time.
      </p>
      <div className={styles.links}>
        <SocialLink>
          <AiOutlineGithub />
        </SocialLink>
        <SocialLink>
          <FaLinkedinIn />
        </SocialLink>
      </div>
      <p className={styles.bottomText}>Handcrafted by me</p>
    </footer>
  );
}

export default Footer;
