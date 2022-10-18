import Head from "next/head";
import { FC, ReactNode, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
    keyword?: string;
    [x: string]: any;
};

const StandardLayout: FC<Props> = ({
    title,
    description,
    keyword,
    children,
    ...props
}) => {
    const defaultValue = "Carpe Diem Skills Academy";
    const seoTitle = title?.length ? title : defaultValue;
    const seoDesc = description?.length ? description : defaultValue;
    const seoKeyword = keyword?.length ? keyword : defaultValue;
    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDesc} />
                <meta name="keywords" content={seoKeyword} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default StandardLayout;
