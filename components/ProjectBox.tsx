import { ProjectType } from "data/projects";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "styles/ProjectBox.module.scss";
import ViewLink from "./ViewLink";
interface ProjectBoxProps {
  project: ProjectType;
}
function ProjectBox({ project }: ProjectBoxProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        onClick={() => {
          window.open(project.frontend.deployed);
        }}
      >
        <button className={styles.visitButton}>View Live</button>
        <Image
          src={project.thumbnail}
          quality={100}
          layout="fill"
          alt={project.name}
          objectFit="cover"
        />
      </div>
      <div className={styles.project}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.description}>
          {truncate(project.description, showFullDescription)}&nbsp;
        </p>
        <p
          className={styles.readMore}
          onClick={() => setShowFullDescription((prev) => !prev)}
        >
          {showFullDescription ? "hide" : "read more"}
        </p>
      </div>
      <div className={styles.links}>
        <ViewLink type="live" href={project.frontend.deployed} />
        <ViewLink type="code" href={project.frontend.github} />
      </div>
    </div>
  );
}

export default ProjectBox;
const truncate = (
  str: string,
  show: boolean = false,
  trimmedLength: number = 100
) => {
  if (show) return str;
  if (str.length <= trimmedLength) return str;
  return str.substring(0, trimmedLength) + "...";
};
