import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/About">About</Link>
      <Link href="/Contact">Contact</Link> 
      <Link href="/Services">Services</Link>
      <Link href="/Products">Products</Link>
      <h2>Home Page</h2>
      <p>Welcome to the home page</p>
      <button>Click me</button>
    </div>
  );
}


