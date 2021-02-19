import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILIVE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Velkommen ombord!</h1>
        </div>

        <p className={styles.description}>
          For at kunne betjene dig bedst muligt beder vi dig nu vælge hvilke
          kategorier, som du er mest interreset i.
        </p>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            style={{ display: "flex" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
              <path d="M456 0H168c-13.255 0-24 10.745-24 24v176H40c-13.255 0-24 10.745-24 24v160H8a8 8 0 00-8 8c.026 22.08 17.92 39.974 40 40h256c22.069.022 39.978-17.851 40-39.92V392a8 8 0 00-8-8h-8v-88h88a8 8 0 000-16h-41.968l-11.424-40H456c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zM32 224a8 8 0 018-8h256a8 8 0 018 8v160H192a8 8 0 00-8 8h-32a8 8 0 00-8-8H32V224zm281.024 184.944A24.148 24.148 0 01296 416H40a24.047 24.047 0 01-22.632-16H136a8 8 0 008 8h48a8 8 0 008-8h118.632a24.331 24.331 0 01-5.608 8.944zM320 280v-40h17.968l11.424 40H320zm144-64a8 8 0 01-8 8H320c0-13.255-10.745-24-24-24H160V24a8 8 0 018-8h288a8 8 0 018 8v192z" />
              <path d="M440 304h-64c-13.255 0-24 10.745-24 24v128c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V328c0-13.255-10.745-24-24-24zm8 152a8 8 0 01-8 8h-64a8 8 0 01-8-8V328a8 8 0 018-8h64a8 8 0 018 8v128z" />
            </svg>
            <div style={{ paddingLeft: "20px" }}>
              <h3>Elektronik</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Herretøj</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Kosmetik</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
