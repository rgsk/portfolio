import Image from "next/image";
import styles from "styles/ProjectBox.module.scss";
import ViewLink from "./ViewLink";
function ProjectBox() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/sample.jfif"
          quality={100}
          layout="fill"
          alt="project image"
        />
      </div>
      <div className={styles.project}>
        <p className={styles.name}>Project Name</p>
        <p className={styles.description}>
          project description, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam aut...&nbsp;
          <span className={styles.readMore}>read more</span>
        </p>
      </div>
      <div className={styles.links}>
        <ViewLink type="live" />
        <ViewLink type="code" />
      </div>
    </div>
  );
}

export default ProjectBox;
