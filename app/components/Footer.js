import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built with love and Next.js</p>
      <p>Poetry has the power to move the soul</p>
      <div className={styles.footerLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </footer>
  );
}
