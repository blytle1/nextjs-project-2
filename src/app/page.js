import styles from "./globals.css";
import Link from "next/link";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/About">About</Link>
    </div>
  );
}
