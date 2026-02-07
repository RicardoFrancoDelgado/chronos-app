import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((currentState) => {
      return {
        ...currentState,
        config: {
          ...currentState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:44",
      };
    });
  }

  return (
    <form className="form">
      <button type="button" onClick={handleClick}>
        clicar
      </button>
      <div className="formRow">
        <DefaultInput
          labelText="task"
          type="text"
          id="meuInput"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
