import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();

  const taskInputName = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(ev: React.SubmitEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (taskInputName.current === null) return;

    const taskName = taskInputName.current.value.trim();

    if (!taskName) {
      alert("Insira o nome da task");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1, //TODO
      type: "workTime", //TODO
    };

    const secondsRemaining = newTask.duration * 60;

    setState((currentTask) => {
      return {
        ...currentTask,
        config: { ...currentTask.config },
        activeTask: newTask,
        currentCycle: 1, //TODO
        secondsRemaining,
        formattedSecondsRemaining: "00:00", //TODO
        tasks: [...currentTask.tasks, newTask],
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          type="text"
          id="meuInput"
          placeholder="Digite algo"
          ref={taskInputName}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
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
