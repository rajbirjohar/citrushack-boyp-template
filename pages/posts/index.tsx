import { getSortedPostsData } from "@/lib/posts";
import css from "./styles.module.css";
import Link from "next/link";
import { format } from "date-fns";

export default function Posts(props: { allPostsData: Metadata[] }) {
  return (
    <>
      <h1>Posts</h1>
      <ul className={css.list}>
        {props.allPostsData.map((post) => (
          <li className={css.item} key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <time>{format(new Date(post.date), "MM/dd/yyyy")}</time>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData: JSON.parse(JSON.stringify(allPostsData)),
    },
  };
}
