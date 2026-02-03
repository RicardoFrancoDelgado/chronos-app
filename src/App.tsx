import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo{" "}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        praesentium, totam minima nostrum sint at. Eum debitis distinctio optio
        facilis cumque eius voluptatem! Animi velit aliquid sequi non eum sit.
      </p>
    </>
  );
}
