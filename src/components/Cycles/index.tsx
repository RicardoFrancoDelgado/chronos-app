import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleTypeArray = Array.from({ length: state.currentCycle });

  const getCycleTypeMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleTypeArray.map((_, index) => {
          const nextCyle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCyle);
          return (
            <span
              key={nextCycleType}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${getCycleTypeMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${getCycleTypeMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
