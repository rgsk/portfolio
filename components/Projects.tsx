import ProjectBox from "./ProjectBox";
import styles from "styles/Projects.module.scss";
import { projects } from "data/projects";

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectBox key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
