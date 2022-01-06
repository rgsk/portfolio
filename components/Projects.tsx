import ProjectBox from "./ProjectBox";
import styles from "styles/Projects.module.scss";
function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.grid}>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
    </div>
  );
}

export default Projects;
