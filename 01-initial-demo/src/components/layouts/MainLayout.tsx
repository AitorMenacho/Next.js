import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./mainLayout.module.css";
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Aitor</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>{children}</div>
      </main>
    </>
  );
};
