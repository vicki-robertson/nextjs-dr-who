import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>responsive</h1>
        <li>
          <a href="#">link</a>
          <a>link 2</a>
        </li>
      </div>
    </main>
  );
}
