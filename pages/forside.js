import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const forside = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className="bg-white p-0 text-black mb-10 sm:p-10">
          <h1 className={styles.title}>Velkommen tilbage Marianne</h1>
        </div>
        <div className="text-white text-2xl my-10">
          Dine valgte virksomheder
        </div>
        <div className="flex justify-around ">
          <div>Elgiganten</div>
          <div>Power</div>
          <div>Computerworld</div>
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
};

export default forside;
