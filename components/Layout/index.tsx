import css from "./styles.module.css";

/**
 * Wraps all pages via the `_app` file. Used primarily for consistent
 * styling purposes.
 *
 * @param {React.ReactNode} props.children - The pages being wrapped.
 * @returns {JSX.Element}
 */
export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <main className={css.wrapper}>{props.children}</main>;
}
