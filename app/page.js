// 
import { items } from './data'; 
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="My favourite Poems"
        tagline="A collection of words that speak to my heart ,reflect my feelings and help me understand myself better"
      />
      <CardGrid items={items} />
    </main>
  );
}

