import styles from "styles/SkillRow.module.scss";

function SkillRow() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Front-end</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
      </div>
      <div>
        <p>Tools:</p>
        <p>React JS</p>
        <p>Sass</p>
      </div>
    </div>
  );
}
export default SkillRow;
