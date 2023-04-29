import css from "./styles.module.css";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <main className={css.wrapper}>{props.children}</main>;
}
