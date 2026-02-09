import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

// tipagem da task
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// contexto da task recebendo um estado inicial e uma função de callback
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

// primeiro export (fastreload vai reclamar)
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
