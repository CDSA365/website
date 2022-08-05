import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
// import { StyledEngineProvider } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            {/* <StyledEngineProvider injectFirst> */}
            <Component {...pageProps} />
            {/* </StyledEngineProvider> */}
        </CacheProvider>
    );
}

export default MyApp;
