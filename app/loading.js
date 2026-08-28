import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.container}>
      <div className={styles.spinner}></div>
      <p>Loading poems...</p>
    </main>
  );
}
