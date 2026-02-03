import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading attr={123} attr2={"string"}>
        Olá mundo
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        praesentium, totam minima nostrum sint at. Eum debitis distinctio optio
        facilis cumque eius voluptatem! Animi velit aliquid sequi non eum sit.
      </p>
    </>
  );
}
