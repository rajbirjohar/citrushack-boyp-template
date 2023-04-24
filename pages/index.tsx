import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

/**
 * Welcome! If you are reading this, this means you've successfully
 * installed the Citrus Hack BYOP workshop template.
 *
 * Here is where we begin our journey exploring the world wide web.
 *
 * Strap in and get ready to be frustrated beyond your wildest dreams.
 * If you persist, you can walk away with something that's beautiful,
 * and more importantly, yours.
 *
 * In this workshop you will learn how to:
 * - Navigate around the app, code wise and app wise.
 * - Create new static pages such as an `about` page.
 * - Create dynamic pages for your own blog.
 * - Create common components to be reused across all your pages.
 * - Build a theme switcher.
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <>
      {/* This is the <Head /> tag used for storing meta data and any 
    other data that you want search engines like Google to read. */}
      <Head>
        {/* Try editing me! Then watch your browser tab update. */}
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Edit below this line and watch the magic happen. In real time 😎. */}
    </>
  );
}
