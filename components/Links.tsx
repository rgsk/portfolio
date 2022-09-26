import styles from "../styles/Links.module.scss";
import SocialLink from "./SocialLink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
interface ILinksProps {}
const Links: React.FC<ILinksProps> = ({}) => {
  return (
    <div className={styles.links}>
      <SocialLink href="mailto:rahulguptacs1@gmail.com">
        <FiMail />
      </SocialLink>
      <SocialLink href="https://github.com/rgsk">
        <AiOutlineGithub />
      </SocialLink>
      <SocialLink href="https://twitter.com/rahulsde">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/rahul-gupta-321a42161/">
        <FaLinkedinIn />
      </SocialLink>
    </div>
  );
};
export default Links;
