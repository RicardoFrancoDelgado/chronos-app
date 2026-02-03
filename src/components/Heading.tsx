import styles from "./Heading.module.css";

export function Heading() {
  console.log(styles);

  return <h1 className={`${styles.cyan} ${styles.heading}`}>Olá Mundo</h1>;
}
