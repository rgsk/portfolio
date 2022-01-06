import SkillRow from "./SkillRow";
import styles from "styles/SkillsDemonstration.module.scss";
function SkillsDemonstration() {
  return (
    <div className={styles.outer}>
      <div className={styles.halfColor}></div>
      <div className={styles.inner}>
        <SkillRow />
        <SkillRow />
        <SkillRow />
      </div>
    </div>
  );
}

export default SkillsDemonstration;
