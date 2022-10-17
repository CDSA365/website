import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        const critical = extractCritical(initialProps.html);
        initialProps.html = critical.html;
        initialProps.styles = (
            <React.Fragment>
                {initialProps.styles}
                <style
                    data-emotion-css={critical.ids.join(" ")}
                    dangerouslySetInnerHTML={{ __html: critical.css }}
                />
            </React.Fragment>
        );

        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="google-site-verification"
                        content="TQzQ2whZRQK2Gt35GAlfkEairavXg7ASktjgKEqZ_8g"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-131650902-1"
                    ></script>
                    <script>
                        function gtag(){dataLayer.push(arguments)}
                        window.dataLayer=window.dataLayer||[],gtag("js",new
                        Date),gtag("config","UA-131650902-1")
                    </script>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-7WQBH1E1N7"
                    ></script>
                    <script>
                        function gtag(){dataLayer.push(arguments)}
                        window.dataLayer=window.dataLayer||[],gtag("js",new
                        Date),gtag("config","G-7WQBH1E1N7")
                    </script>
                    <script
                        defer="defer"
                        src="/static/js/main.e07f7365.js"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
