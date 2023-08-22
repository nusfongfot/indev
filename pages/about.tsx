import About from "@/components/about";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>WEB DEV IN DREAM</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <About />
    </>
  );
}
