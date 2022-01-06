import styles from "styles/Home.module.scss";
import Image from "next/image";
import SkillsDemonstration from "./SkillsDemonstration";
function Home() {
  return (
    <div>
      <div className={styles.firstContainer}>
        <h1 className={styles.head}>Designer, Front-end Developer & Mentor</h1>
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
            Since beginning my journey as a freelance designer nearly 10 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <div>
        <SkillsDemonstration />
      </div>
    </div>
  );
}

export default Home;
