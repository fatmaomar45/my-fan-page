"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${
              activeCategory === cat.id ? styles.activeFilter : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <Link href={"/faves/" + item.id} key={item.id}>
            <Card
              name={item.name}
              author={item.author}
              image={item.image}
              blurb={item.blurb}
              rating={item.rating}
              emoji={item.emoji}
              category={item.category}
            />
          </Link>
        ))}
      </div>
      {filteredItems.length === 0 && (
        <p className={styles.empty}>No poems in this category yet.</p>
      )}
    </div>
  );
}
