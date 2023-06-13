import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.customCheckbox} title="Concluir tarefa">
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed, laborum. Facilis eius voluptas reiciendis animi
        quia eum quaerat nihil pariatur ex sapiente, accusamus illo accusantium
        cum hic tenetur, iusto quae.
      </p>
      <button title="Apagar tarefa">
        <Trash height={16} />
      </button>
    </div>
  );
}
