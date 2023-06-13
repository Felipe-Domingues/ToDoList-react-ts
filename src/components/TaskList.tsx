import { ClipboardText } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Task } from "./Task";

export function TaskList() {
  return (
    <main className={styles.main}>
      <header className={styles.info}>
        <p className={styles.createdTasksTitle}>
          Tarefas criadas <span className={styles.tasksCounter}>0</span>
        </p>
        <p className={styles.completedTasksTitle}>
          Concluídas <span className={styles.tasksCounter}>2 de 5</span>
        </p>
      </header>
      <div className={styles.container}>
        <div className={styles.emptyTasks}>
          <ClipboardText width={56} height={56}></ClipboardText>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
}
