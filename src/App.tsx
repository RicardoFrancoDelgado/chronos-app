import { useState } from "react";
import type { TaskStateModel } from "./models/TaskStateModel";
import { Home } from "./pages/Home";
// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";
import "./styles/global.css";
import "./styles/theme.css";

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

  console.log(state);

  return <Home state={state} setState={setState} />;
}
