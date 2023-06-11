import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="./src/assets/logo.svg"
        alt="Logo ToDo List"
      />
    </div>
  );
}
