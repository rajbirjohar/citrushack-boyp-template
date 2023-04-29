import { getAllPostIds, getPostData } from "@/lib/posts";
import { format } from "date-fns";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Post(): JSX.Element {
  return <></>;
}

export async function getStaticPaths() {}

export async function getStaticProps({ params }: { params: Params }) {}
