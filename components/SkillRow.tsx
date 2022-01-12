import styles from "styles/SkillRow.module.scss";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineChrome } from "react-icons/ai";
const details = {
  backend: {
    icon: <FiDatabase />,
    head: "Back-end",
    description: "Built various CRUD apps to power business logic in my apps.",
    tools: [
      "Core - Node JS, Express, Nest JS, Apollo Graphql",
      "Databases - MongoDB, Postgres, Redis",
      "Authentication - JWT, Firebase",
      "REST API - HTTP Methods, Express Routing, Middlewares",
      "Graphql API - Queries, Mutation, Data Resolvers, Directives, Subscriptions",
    ],
  },
  frontend: {
    icon: <AiOutlineChrome />,
    head: "Front-end",
    description:
      "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    tools: [
      "Core - React JS, Next JS (SSR), Typescript",
      "State Management Tools - Redux, Recoil",
      "Data Fetching - Axios, React Query, Apollo",
      "Animations - React Transition Group, Framer Motion",
      "CSS Styling - CSS modules, SASS, Material UI, Tailwind",
      "Extra - Three JS (Beginner), D3",
    ],
  },
};
interface SkillRowProps {
  type: "frontend" | "backend";
}
function SkillRow({ type }: SkillRowProps) {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <div className={styles.icon}>{details[type].icon}</div>
        <h2>{details[type].head}</h2>
        <p>{details[type].description}</p>
      </div>
      <div className={styles.rest}>
        <p className={styles.sectionHead}>Tools:</p>
        <div className={styles.toolsList}>
          {details[type].tools.map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SkillRow;
