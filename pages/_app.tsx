import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbarx";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <title>Reve.s</title>
                <meta property="og:title" content="Reve.s" key="ogtitle" />
                <link rel="shortcut icon" href="/favicon.png" />
                <meta
                    property="og:description"
                    content="S'épanouir ensemble"
                    key="ogdesc"
                />
                <meta
                    property="og:image"
                    content="https://reve-s.net/favicon.png"
                    key="ogpic"
                />
            </Head>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
