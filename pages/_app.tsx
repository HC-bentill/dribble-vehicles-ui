import PageLayout from "@/components/layout/Layout";
import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Dribble UI #2</title>
        <meta name="description" content="Dribble Desings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/van-no-bg-removebg-preview.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
