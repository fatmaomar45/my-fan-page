import { items, categories } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="My Favourite Poems"
        tagline="A collection of words that speak to my heart, reflect my feelings, and help me understand myself better."
        count={items.length}
      />
      <CardGrid items={items} categories={categories} />
    </main>
  );
}
