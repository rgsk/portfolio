import styles from "styles/SocialLink.module.scss";
interface SocialLinkProps {
  children: any;
}
function SocialLink({ children }: SocialLinkProps) {
  return <div className={styles.link}>{children}</div>;
}
export default SocialLink;
