import type { ReactNode } from "react";
import styles from "./styles.module.css";

type HeadingProps = {
  children: ReactNode; // sempre que usar children é bom tipar como React.ReactNode
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={`${styles.cyan} ${styles.heading}`}>{children}</h1>;
}
 