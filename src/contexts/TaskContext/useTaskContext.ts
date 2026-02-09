// hook personalizado -> fast refresh também vai reclamar

import { useContext } from "react";
import { TaskContext } from "./TaskContext";

// hook personalizado para o contador
export function useTaskContext() {
  return useContext(TaskContext);
}
