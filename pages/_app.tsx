import "../styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import store, { wrapper, persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoutes from "../components/private-routes";

function MyApp({ Component, pageProps }: AppProps) {
    const protectedRoutes = ["/dashboard"];
    return (
        <CacheProvider value={cache}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <PrivateRoutes protectedRoutes={protectedRoutes}>
                        <Component {...pageProps} />
                    </PrivateRoutes>
                </PersistGate>
            </Provider>
        </CacheProvider>
    );
}

export default wrapper.withRedux(MyApp);
