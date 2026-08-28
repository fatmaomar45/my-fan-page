"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        📜 Poetry Collection
      </Link>
      <div className={styles.links}>
        <Link
          href="/"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${styles.link} ${pathname === "/about" ? styles.active : ""}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
