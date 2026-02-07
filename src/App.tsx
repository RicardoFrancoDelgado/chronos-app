// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/Home";
import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext";

const initialTask: TaskStateModel = {
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

export function App() {
  const [state, setState] = useState(initialTask);

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
