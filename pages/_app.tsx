import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import store, { wrapper, persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "../context/auth-context";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    const src1 = "https://www.googletagmanager.com/gtag/js?id=UA-131650902-1";
    const src2 = "https://www.googletagmanager.com/gtag/js?id=G-7WQBH1E1N7";
    return (
        <>
            <Script strategy="beforeInteractive" async src={src1} />
            <Script strategy="beforeInteractive" async src={src2} />
            <Script
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer=window.dataLayer||[]
                    function gtag(){dataLayer.push(arguments)}
                    gtag("js",new Date)
                    gtag("config","UA-131650902-1")`,
                }}
            />
            <Script
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer=window.dataLayer||[]
                    function gtag(){dataLayer.push(arguments)}
                    gtag("js",new Date)
                    gtag("config","G-7WQBH1E1N7")`,
                }}
            />
            <Script defer src="/static/js/main.e07f7365.js" />
            <CacheProvider value={cache}>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <AuthProvider>
                            <Component {...pageProps} />
                        </AuthProvider>
                    </PersistGate>
                </Provider>
            </CacheProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
