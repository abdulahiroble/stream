import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";

const forside = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main>
          <div className="bg-white p-0 text-black mb-10 sm:p-10">
            <h1 className={styles.title}>Velkommen tilbage Marianne</h1>
          </div>
          <div className="text-white text-2xl my-10">
            Dine valgte virksomheder
          </div>
          <div className="flex justify-evenly ">
            <div className="bg-white">
              <Image width={400} height={100} src="/Føniks-1.png" alt="" />
            </div>
            <div className="bg-white mx-10">
              <Image width={400} height={100} src="/Power-logo.png" alt="" />
            </div>
            <div className="bg-white">
              <Image width={400} height={100} src="/elgigant.png" alt="" />
            </div>
          </div>
          <br />
          <div className="text-white text-2xl my-10">
            Virksomheder du kunne være interreset i
          </div>
          <div className="flex justify-around ">
            <div className="bg-white">
              <Image width={400} height={100} src="/Føniks-1.png" alt="" />
            </div>
            <div className="bg-white mx-10">
              <Image width={400} height={100} src="/Power-logo.png" alt="" />
            </div>
            <div className="bg-white">
              <Image width={400} height={100} src="/elgigant.png" alt="" />
            </div>
          </div>
        </main>

        <div className="bg-purple-400 p-4 m-3 text-lg">
          <Link href="/forside">Næste</Link>
        </div>
      </div>
    </>
  );
};

export default forside;
