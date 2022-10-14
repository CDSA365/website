import Head from "next/head";
import { FC, ReactNode } from "react";
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
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

StandardLayout.defaultProps = {
    title: "Carpe Diem Skills Academy",
    description: "Carpe Diem Skills Academy",
    keyword: "Carpe Diem Skills Academy",
};

export default StandardLayout;
