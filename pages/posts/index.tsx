import { getSortedPostsData } from "@/lib/posts";
import css from "./styles.module.css";
import Link from "next/link";
import { format } from "date-fns";

export default function Posts(props: {
  allPostsData: Metadata[];
}): JSX.Element {
  return <></>;
}

export async function getStaticProps() {}
