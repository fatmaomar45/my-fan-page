import Link from "next/link";
import Card from "./Card";
import styles from "./CardGrid.module.css";




export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link href={"/faves/" + item.id} key={item.id}>
        <Card
          key={item.id}
          name={item.name}
          image={item.image}
          blurb={item.blurb}
          rating={item.rating}
          emoji1={item.emoji1}
        />
        </Link>
      ))}
    </div>
  );
}

