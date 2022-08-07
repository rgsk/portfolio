import styles from "styles/Home.module.scss";
import Image from "next/image";
import SkillsDemonstration from "./SkillsDemonstration";
import Projects from "./Projects";
import IntroVideo from "./IntroVideo";
function Home() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <h1 className={styles.head}>Software Developer</h1>
        <p className={styles.text}>
          I design and code beautifully simple things, and I love what I do.
        </p>
        <div>
          <Image
            src="/mf-avatar.svg"
            width={150}
            height={150}
            alt="mf-avatar"
          />
        </div>
      </div>
      <div>
        <div className={styles.heroContainer}>
          <Image src="/hero.svg" layout="fill" alt="hero" />
        </div>
      </div>
      <div className={styles.introContainer}>
        <div className={styles.content}>
          <h2 className={styles.head}>Hi, I’m Rahul. Nice to meet you.</h2>
          <p className={styles.text}>
            I am a Bcom Graduate, who stumbled upon coding in my 2nd year of
            college, I started learning Python, then Javascript, which led me to
            Web Development, since then I am really enjoying it, its a dream
            come true, I feel fortunate that I get to do everyday what I truly
            love.
          </p>
        </div>
      </div>
      <div>
        <IntroVideo />
      </div>
      <div>
        <SkillsDemonstration />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
}

export default Home;
