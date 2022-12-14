import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import Script from "next/script";
import Head from "next/head";

type SEO = {
    title: string;
    description: string;
    keyword: string;
};

function MyApp({ Component, pageProps }: AppProps<any>) {
    const src1 = "https://www.googletagmanager.com/gtag/js?id=UA-131650902-1";
    const src2 = "https://www.googletagmanager.com/gtag/js?id=G-7WQBH1E1N7";
    return (
        <>
            <Head>
                <title>{pageProps.title}</title>
                <meta name="description" content={pageProps.description} />
                <meta name="keywords" content={pageProps.keyword} />
            </Head>
            <Script strategy="beforeInteractive" async src={src1} />
            <Script strategy="beforeInteractive" async src={src2} />
            <Script
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag("js",new Date);gtag("config","UA-131650902-1");`,
                }}
            />
            <Script
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag("js",new Date);gtag("config","G-7WQBH1E1N7")`,
                }}
            />
            <Script defer src="/static/js/main.e07f7365.js" />
            <CacheProvider value={cache}>
                <Component {...pageProps} />
            </CacheProvider>
        </>
    );
}

export default MyApp;
