import Head from "next/head";
import SwapForm from "@/components/form";

export default function Home() {
  return (
    <>
    <Head>
    <title>Rantman</title>
    <meta name="description" content="an obfuscated notes app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <SwapForm/>
    </>
  );
}
