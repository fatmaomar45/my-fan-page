import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <h1>About This Collection</h1>
      <section className={styles.section}>
        <h2>Hello, I&apos;m Fatma</h2>
        <p>
          Welcome to my personal poetry collection! This is a curated selection
          of poems that have touched my heart and stayed with me over time.
        </p>
        <p>
          These poems are special to me because they express feelings and
          thoughts that I sometimes cannot put into words. Each one carries its
          own meaning, emotion, and memory that I connect with in my personal
          way.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Why Poetry?</h2>
        <p>
          Poetry has a unique way of capturing the human experience in just a
          few lines. A well-crafted verse can make you feel understood, inspire
          you to be brave, or bring comfort during difficult times.
        </p>
        <p>
          This collection is a reflection of poems that resonate with my soul 
          words that have guided me, healed me, and reminded me of the beauty in
          being human.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Categories</h2>
        <p>
          I&apos;ve organized these poems into themes like wisdom, courage,
          strength, hope, and freedom. Feel free to explore and find the ones
          that speak to you!
        </p>
      </section>
    </main>
  );
}
