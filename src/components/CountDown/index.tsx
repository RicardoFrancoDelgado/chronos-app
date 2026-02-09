import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext(); // usando o hook personalizado

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
