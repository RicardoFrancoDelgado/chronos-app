// import { AboutPomodoro } from "./pages/AboutPomodoro";
// import { NotFound } from "./pages/NotFound";

import { Home } from "./pages/Home";
import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
