import styles from "styles/ViewLink.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
interface ViewLinkProps {
  type: "live" | "code";
  href: string;
}

function ViewLink({ type, href }: ViewLinkProps) {
  return (
    <a
      className={styles.container}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      view {type}{" "}
      {type === "live" ? <RiExternalLinkLine /> : <AiOutlineGithub />}
    </a>
  );
}
export default ViewLink;
