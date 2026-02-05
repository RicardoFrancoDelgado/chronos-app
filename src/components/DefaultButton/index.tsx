import type { ReactNode } from "react";
import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[color]}`}>
      {icon}
    </button>
  );
}
