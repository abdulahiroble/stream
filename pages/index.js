import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILIVE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="bg-white p-0 text-black sm:p-10">
          <h1 className={styles.title}>Velkommen ombord!</h1>

          <div className={styles.description}>
            For at kunne betjene dig bedst muligt beder vi dig nu vælge hvilke
            kategorier, som du er mest interreset i.
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            style={{ display: "flex" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
              <path
                fill="#fff"
                d="M456 0H168c-13.255 0-24 10.745-24 24v176H40c-13.255 0-24 10.745-24 24v160H8a8 8 0 00-8 8c.026 22.08 17.92 39.974 40 40h256c22.069.022 39.978-17.851 40-39.92V392a8 8 0 00-8-8h-8v-88h88a8 8 0 000-16h-41.968l-11.424-40H456c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zM32 224a8 8 0 018-8h256a8 8 0 018 8v160H192a8 8 0 00-8 8h-32a8 8 0 00-8-8H32V224zm281.024 184.944A24.148 24.148 0 01296 416H40a24.047 24.047 0 01-22.632-16H136a8 8 0 008 8h48a8 8 0 008-8h118.632a24.331 24.331 0 01-5.608 8.944zM320 280v-40h17.968l11.424 40H320zm144-64a8 8 0 01-8 8H320c0-13.255-10.745-24-24-24H160V24a8 8 0 018-8h288a8 8 0 018 8v192z"
              />
              <path
                fill="#fff"
                d="M440 304h-64c-13.255 0-24 10.745-24 24v128c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V328c0-13.255-10.745-24-24-24zm8 152a8 8 0 01-8 8h-64a8 8 0 01-8-8V328a8 8 0 018-8h64a8 8 0 018 8v128z"
              />
            </svg>
            <div style={{ paddingLeft: "20px" }}>
              <h3>Elektronik</h3>
              <p>Find in-depth information about Next.js.</p>
            </div>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            style={{ display: "flex" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.7 407.7">
              <path
                fill="#fff"
                d="M405.5 118.021a7.93 7.93 0 00-.29-.29l-84.16-74.8a7.994 7.994 0 00-2.64-1.6l-60.88-21.76a8 8 0 00-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 00-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 000 11.6l66.56 67.28v184a8 8 0 008 8h253.6a8 8 0 008-8v-184l66.56-67.28a8 8 0 00.29-11.31zm-67.09 55.79v-37.12a8 8 0 00-16 0v235.52H84.73v-235.52a8 8 0 00-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
              />
            </svg>
            <div style={{ paddingLeft: "20px" }}>
              <h3>Herretøj</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
            style={{ display: "flex" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
              <path
                fill="#fff"
                d="M40 248a7.966 7.966 0 00.07 1.058l30.149 226.114A24.074 24.074 0 0094.008 496H432a24.027 24.027 0 0024-24v-31.47l31.93-239.472c0-.035 0-.069.008-.1.019-.162.029-.326.039-.491.007-.12.016-.239.018-.359V168a8 8 0 00-8-8H320a8 8 0 00-8 8v32.1c0 .12.011.239.018.359.01.165.02.329.039.491 0 .034 0 .068.008.1l14.749 110.615c-16.084-1.222-21.056-5.575-22.512-7.616a5.983 5.983 0 01-.861-5.118 7.641 7.641 0 00-.6-7.417A7.971 7.971 0 00296 288c-15.917 0-28.185 3.1-38.29 7.706l6.22-46.648A7.966 7.966 0 00264 248a104.111 104.111 0 00-56.755-92.635 7.986 7.986 0 00.646-4.68l-8-48A8 8 0 00192 96h-8V64h56a8 8 0 008-8V24a8 8 0 00-8.532-7.982l-120 8a8 8 0 00-7.057 5.452l-8 24A8 8 0 00112 64h8v32h-8a8 8 0 00-7.891 6.685l-8 48a7.986 7.986 0 00.646 4.68A104.111 104.111 0 0040 248zm328 232H174.967a6.974 6.974 0 01-6.967-6.967v-82.066a6.974 6.974 0 016.967-6.967h194.066a6.974 6.974 0 016.967 6.967v82.066a6.974 6.974 0 01-6.967 6.967zM192 352h160v16H192zm248 120a8.009 8.009 0 01-8 8h-41.083a22.9 22.9 0 001.083-6.967V448h48zm1-40h-49v-41.033A22.993 22.993 0 00369.033 368H368v-24c0-.224-.015-.444-.033-.664 0-.031-.008-.088-.013-.138v-.027a41.974 41.974 0 00-4.673-14.982 29.579 29.579 0 00-20.181-15.445L329.137 208h141.726zM328 176h144v16H328zm-37.082 136.823C297.683 322.894 312.85 328 336 328c6 0 10.133 2.369 13.02 7.457.1.181.2.362.292.543H229.021c3.414-2.616 6.665-5.363 9.888-8.09 13.026-11.023 25.406-21.5 48.606-23.549a21.459 21.459 0 003.403 8.462zM125.891 39.625L232 32.551V48H123.1zM136 64h32v32h-32zm-22.556 80l5.333-32h66.446l5.333 32h-77.112zM144 160h16a88.1 88.1 0 0188 87.48l-7.844 58.82c-4.117 3.081-7.91 6.286-11.583 9.394C215.7 326.591 204.579 336 184 336a8 8 0 00-8 8v24h-1.033A22.993 22.993 0 00152 390.967v82.066a22.9 22.9 0 001.083 6.967H94.008a8.026 8.026 0 01-7.93-6.943L56 247.48A88.1 88.1 0 01144 160z"
              />
              <path
                fill="#fff"
                d="M272 400a32 32 0 1032 32 32.036 32.036 0 00-32-32zm0 48a16 16 0 1116-16 16.019 16.019 0 01-16 16zM400 288c22.8 0 40-10.317 40-24s-17.2-24-40-24-40 10.317-40 24 17.2 24 40 24zm0-32c15.488 0 24 6.009 24 8s-8.512 8-24 8-24-6.009-24-8 8.512-8 24-8zM104 280h96a8 8 0 008-8v-48a8 8 0 00-8-8h-96a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h80v32h-80z"
              />
            </svg>
            <div style={{ paddingLeft: "20px" }}>
              <h3>Kosmetik</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
          </a>
        </div>
      </main>

      <div className="bg-purple-400 p-4 m-3 text-lg">
        <Link href="/forside">Næste</Link>
      </div>

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
