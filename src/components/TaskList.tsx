import { ClipboardText } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.createdTasksTitle}>
          Tarefas criadas <span className={styles.tasksCounter}>0</span>
        </p>
        <p className={styles.completedTasksTitle}>
          Concluídas <span className={styles.tasksCounter}>0</span>
        </p>
      </header>
      <div className={styles.container}>
        <div className={styles.emptyTasks}>
          <ClipboardText width={56} height={56}></ClipboardText>
          <h1>Você ainda não tem tarefas cadastradas</h1>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </div>
      </div>
    </main>
  );
}
