import { createContext, useContext, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

// estado inicial da task
const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: "00:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

// tipagem da task
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// contexto da task recebendo um estado inicial e uma função de callback
const initialContextValue = {
  state: initialState,
  setState: () => {},
};

// primeiro export (fastreload vai reclamar)
export const TaskContext = createContext<TaskContextProps>(initialContextValue);

// Provider personalizado
// tipo do provider
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// componente do provider
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialState);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}

// hook personalizado -> fast refresh também vai reclamar
// hook personalizado para o contador
export function useTaskContext() {
  return useContext(TaskContext);
}
