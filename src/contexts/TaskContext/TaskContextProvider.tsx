// Provider personalizado

import { useEffect, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

// tipo do provider
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// componente do provider
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
