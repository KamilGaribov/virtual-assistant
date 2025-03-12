import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="glass">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <span>virtual assistant application</span>
      <ul>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
