import styles from "styles/ViewLink.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
interface ViewLinkProps {
  type: "live" | "code";
}

function ViewLink({ type }: ViewLinkProps) {
  return (
    <div className={styles.container}>
      view {type}{" "}
      {type === "live" ? <RiExternalLinkLine /> : <AiOutlineGithub />}
    </div>
  );
}
export default ViewLink;
