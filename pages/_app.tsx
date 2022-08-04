import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            <Component {...pageProps} />
        </CacheProvider>
    );
}

export default MyApp;
