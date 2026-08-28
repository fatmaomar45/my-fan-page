import Link from "next/link";
import { items } from "../../data";
import LikeButton from "../../components/LikeButton";
import styles from "./FaveDetail.module.css";

export default async function FaveDetail({ params }) {
  const { id } = await params;
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main className={styles.notFound}>
        <h1>Poem Not Found</h1>
        <p>Sorry, that poem doesn&apos;t exist in our collection.</p>
        <Link href="/" className={styles.backBtn}>
          Back to Collection
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.detail}>
      <Link href="/" className={styles.back}>
        Back to all poems
      </Link>
      <article className={styles.poemCard}>
        {item.image && (
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.name} />
          </div>
        )}
        <div className={styles.content}>
          <span className={styles.category}>{item.category}</span>
          <h1>
            {item.emoji} {item.name}
          </h1>
          <p className={styles.author}>by {item.author}</p>
          <div className={styles.stars}>{"⭐".repeat(item.rating)}</div>
          <blockquote className={styles.text}>{item.text}</blockquote>
          <div className={styles.actions}>
            <LikeButton />
          </div>
        </div>
      </article>
    </main>
  );
}
