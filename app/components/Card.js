import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ name, author, blurb, rating, emoji, image, category }) {
  return (
    <article className={styles.card}>
      {image ? (
        <div className={styles.imageWrapper}>
          <Image src={image} alt={name} width={240} height={140} />
        </div>
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h2>{name}</h2>
        <p className={styles.author}>by {author}</p>
        <p className={styles.blurb}>{blurb}</p>
        <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      </div>
    </article>
  );
}
