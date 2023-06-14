import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { ChangeEvent, useState } from "react";

export interface TaskType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string, isCompleted: boolean) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  const [taskIsCompleted, setTaskIsCompleted] = useState(task.isCompleted);

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    const IsCompleted = event.target.checked;
    setTaskIsCompleted(IsCompleted);
    onCompleteTask(task.id, IsCompleted);
  }

  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox} title="Concluir tarefa">
        <input
          type="checkbox"
          checked={taskIsCompleted}
          onChange={handleCompletedTask}
        />
        <span className={styles.checkmark}></span>
      </label>
      <p className={taskIsCompleted ? styles.titleLineThrough : styles.title}>
        {task.title}
      </p>
      <button onClick={handleDeleteTask} title="Apagar tarefa">
        <Trash height={16} />
      </button>
    </div>
  );
}
