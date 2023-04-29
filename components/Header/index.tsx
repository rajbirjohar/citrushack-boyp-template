import Link from "next/link";
import css from "./styles.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
