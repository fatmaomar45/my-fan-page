import styles from "./Hero.module.css";

export default function Hero({ title, tagline, count }) {
  return (
    <header className={styles.hero}>
      <div className={styles.decoration}>✦</div>
      <h1>{title}</h1>
      <p>{tagline}</p>
      {count !== undefined && (
        <span className={styles.badge}>{count} poems</span>
      )}
    </header>
  );
}
