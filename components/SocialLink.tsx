import styles from "styles/SocialLink.module.scss";
interface SocialLinkProps {
  children: any;
  href: string;
}
function SocialLink({ children, href }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className={styles.link}>{children}</div>
    </a>
  );
}
export default SocialLink;
