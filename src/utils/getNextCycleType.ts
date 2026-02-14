import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel["type"] {
  if (currentCycle % 8 === 0) return "longBreakTime";
  if (currentCycle % 2 === 0) return "shortBreakTime";
  return "workTime";
}

/**
 * TODO: Fazer uma verificação de todos os multiplos para definir qual ciclo
 * TODO: se for impar é worktime
 * TODO: pares são shortbreaktime
 * TODO: multiplos de 8 longbreaktime
 * */
