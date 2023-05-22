import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      title: "og",
    },
    revalidate: 60,
  };
};

export default function Home({ title }: Props) {
  return (
    <>
      <Head>
        <title>Blog og</title>
        <meta name="description" content="OGP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </>
  );
}
