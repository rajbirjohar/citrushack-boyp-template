import { getAllPostIds, getPostData } from "@/lib/posts";
import { format } from "date-fns";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Post(props: { postData: Post }): JSX.Element {
  return (
    <>
      {props.postData.title}
      <br />
      {props.postData.id}
      <br />
      <time>{format(new Date(props.postData.date), "MM/dd/yyyy")}</time>
      <br />
      <div dangerouslySetInnerHTML={{ __html: props.postData.content }} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
    },
  };
}
