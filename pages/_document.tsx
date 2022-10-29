import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "@emotion/server";
import siteMetadata from "../config/metadata";

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
        const { companyName, canonicalUrl } = siteMetadata;
        return (
            <Html lang="en">
                <Head>
                    <meta name={metaName} content={metaContent} />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:site_name" content={companyName} />
                    <meta property="og:url" content={canonicalUrl} />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
