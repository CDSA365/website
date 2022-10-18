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
        const metaName = "google-site-verification";
        const metaContent = "TQzQ2whZRQK2Gt35GAlfkEairavXg7ASktjgKEqZ_8g";
        return (
            <Html lang="en">
                <Head>
                    <meta name={metaName} content={metaContent} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
