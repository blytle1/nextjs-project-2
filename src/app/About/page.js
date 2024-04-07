import Link from "next/link";

export default function About() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/Contact">Contact</Link>
      <Link href="/Services">Services</Link>
      <Link href="/Products">Products</Link>
      <h2>About Page</h2>
    </div>
  );
}



