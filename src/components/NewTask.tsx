import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.hug}>
      <input
        type="text"
        name="newTaskField"
        id="newTaskField"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.btnNewTask}>
        Criar <PlusCircle width={16} height={16} />
      </button>
    </div>
  );
}
