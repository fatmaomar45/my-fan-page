import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.errorCode}>404</div>
      <h1>Page Not Found</h1>
      <p>
        Oops! The page you&apos;re looking for seems to have wandered off like a
        verse without a rhyme.
      </p>
      <Link href="/" className={styles.homeBtn}>
        Return Home
      </Link>
    </main>
  );
}
