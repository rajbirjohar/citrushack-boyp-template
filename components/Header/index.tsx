import Link from "next/link";
import css from "./styles.module.css";
import ThemeSwitch from "../ThemeSwitch";

/**
 * The main header used for navigating between the pages.
 *
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ThemeSwitch />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
