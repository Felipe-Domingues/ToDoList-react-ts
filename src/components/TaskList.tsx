import { ClipboardText, PlusCircle } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Task, TaskType } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const taskToBeAdded: TaskType = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTasks([...tasks, taskToBeAdded]);

    setNewTaskTitle("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!");
  }

  function deleteTask(idTaskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== idTaskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);

    const allCompletedTasks = tasksWithoutDeletedOne.filter((task) => {
      return task.isCompleted;
    });

    setCountCompletedTasks(allCompletedTasks.length);
  }

  function completeTask(
    idTaskToHandleComplete: string,
    taskIsCompleted: boolean
  ) {
    //Update TaskList
    const allTasksList = tasks;
    allTasksList.forEach((task) => {
      if (task.id === idTaskToHandleComplete) {
        task.isCompleted = taskIsCompleted;
      }
    });
    setTasks(allTasksList);

    const allCompletedTasks = tasks.filter((task) => {
      return task.isCompleted;
    });

    setCountCompletedTasks(allCompletedTasks.length);
  }

  const isNewTaskTitleEmpty = newTaskTitle.length === 0;
  const allTasks = tasks.length;

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.hug}>
        <input
          type="text"
          name="newTaskField"
          id="newTaskField"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTaskTitle}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button
          type="submit"
          className={styles.btnNewTask}
          disabled={isNewTaskTitleEmpty}
        >
          Criar <PlusCircle width={16} height={16} />
        </button>
      </form>
      <main className={styles.main}>
        <header className={styles.info}>
          <p className={styles.createdTasksTitle}>
            Tarefas criadas{" "}
            <span className={styles.tasksCounter}>{allTasks}</span>
          </p>
          <p className={styles.completedTasksTitle}>
            Concluídas{" "}
            <span className={styles.tasksCounter}>
              {allTasks > 0
                ? countCompletedTasks + " de " + allTasks
                : allTasks}
            </span>
          </p>
        </header>
        <div className={styles.container}>
          {tasks.length === 0 ? (
            <div className={styles.emptyTasks}>
              <ClipboardText width={56} height={56}></ClipboardText>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCompleteTask={completeTask}
                />
              );
            })
          )}
        </div>
      </main>
    </>
  );
}
