import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/global.css"
import Navbar from "@/components/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  return <>
      <Head>
        <title>ReTekkit</title>
        <meta name="description" content="The home of the ReTekkit Modpack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </main>
    </>
}
